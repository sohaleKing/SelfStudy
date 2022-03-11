const axios = require("axios");

const getPosts = async (tag) => {
  try {
    return await axios.get(
      "https://api.hatchways.io/assessment/blog/posts?tag=" + tag
    );
  } catch (error) {
    console.error(error);
  }
};

const getPostsLists = async (tags) => {
  try {
    return await Promise.all(
      tags.map(async (tag) => {
        const posts = await getPosts(tag);
        return posts.data.posts;
      })
    );
  } catch (error) {
    console.error(error);
  }
};

const mergeandFilter = (list) => {
  const mergedList = [].concat.apply([], list);
  const ids = mergedList.map((o) => o.id);
  return mergedList.filter(({ id }, index) => !ids.includes(id, index + 1));
};

// ping
exports.ping = (req, res) => {
  res.status(200).send({ success: true });
};

exports.posts = (req, res) => {
  if (!req.query.tags) {
    res.status(400).send({ error: "Tags parameter is required" });
    return;
  }

  const tags = req.query.tags.split(",");
  getPostsLists(tags)
    .then((result) => {
      result = mergeandFilter(result);

      if (
        req.query.sortBy != undefined &&
        !["id", "likes", "popularity", "reads"].includes(req.query.sortBy)
      ) {
        res.status(400).send({ error: "SortBy parameter is invalid" });
        return;
      }
      if (
        req.query.direction != undefined &&
        !["asc", "desc"].includes(req.query.direction)
      ) {
        res.status(400).send({ error: "direction parameter is invalid" });
        return;
      }

      const sortBy = req.query.sortBy ? req.query.sortBy : "id";
      if (req.query.direction == "desc") {
        result.sort(function (a, b) {
          return b[sortBy] - a[sortBy];
        });
      } else {
        result.sort(function (a, b) {
          return a[sortBy] - b[sortBy];
        });
      }
      res.status(200).send({ posts: result });
    })
    .catch((error) => {
      console.log(error);
    });
};
