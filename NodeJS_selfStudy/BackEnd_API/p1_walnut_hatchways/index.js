const express = require("express");

const app = express();
app.use(express.static("app"));

app.get("/", (req, res) => {
  res.json({ message: "Hello Walnut_HatchWays from Soheyl Rahgozar" });
});

require("./app/routes/hatchways.routes")(app);

let port = process.env.PORT || 2022;
if (process.env.NODE_ENV === "test") port = 4044;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = server;
