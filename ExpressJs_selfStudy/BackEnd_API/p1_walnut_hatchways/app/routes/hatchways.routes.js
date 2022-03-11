module.exports = (app) => {
  const hatchways = require("../controllers/hatchways.controller.js");

  var router = require("express").Router();

  // Ping
  router.get("/ping", hatchways.ping);

  router.get("/posts", hatchways.posts);

  app.use("/api", router);
};
