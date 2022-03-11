const express = require("express");
const webApp = express(); //better to put app and even better to keep the file name to index.js since
//index.js /html will always automaticaly and by default would be rendered !

webApp.get("/", (req, res) => {
  res.json({ messgae: "hello from server" });
  //better to put res.json({messange:"hi"})
});
require("./src/routers")(webApp);

const liveServer = webApp.listen(2020);
//beter to put a callback ()=>console.log("connected to ${port}") to make sure its serving!

module.exports = liveServer;
