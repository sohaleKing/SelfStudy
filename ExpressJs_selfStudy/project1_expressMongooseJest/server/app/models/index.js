const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
//homeowenr Mongodb database will be generated automatically --- MongoDB Compass need to be installed
db.ownerInfo = require("./owner.model.js")(mongoose);

module.exports = db;
