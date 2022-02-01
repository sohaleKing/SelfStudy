module.exports = (app) => {
  const homeowner = require("../controllers/owner.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", homeowner.create);

  // CreateBulk -XML
  router.post("/createBulk", homeowner.createBulk);

  // Read
  router.get("/:id", homeowner.findOne);

  // Retrieve all
  router.get("/", homeowner.findAll);

  // Update
  router.put("/:id", homeowner.update);

  // Delete
  router.delete("/:id", homeowner.delete);

  // Delete all
  router.delete("/", homeowner.deleteAll);

  app.use("/api/homeowner", router);
};
