module.exports = (app) => {
  const ourApp = require("./controller");
  let router = require("express").Router();
  //ping
  router.get("/ping", ourApp.ping);
  app.use("/api", router);
};
