const express = require("express");
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.xml({
    xmlParseOptions: {
      explicitArray: false, // Only put nodes in array if >1
    },
  })
);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected!");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello MCAP" });
});

require("./app/routes/owner.routes")(app);

const PORT = process.env.PORT || 2020;
const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
module.exports = server;
//Technically we need another db and enviroment for the unitTest to be able to connect and disconnet after the test and not touch the data
//to make it more simple we use this server for test too
