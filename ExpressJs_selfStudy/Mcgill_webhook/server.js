const express = require("express");
const axios = require("axios").default;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  console.log("someone pinged me", req.rawHeaders);
  res.send("its working!! (Soheyl)");
});

app.post("/user/message", (req, res) => {
  console.log(req.body);
  res.end();
});

let webhooks = [];

const fakeMessage = [Math.floor(Math.random() * 3)];

setInterval(() => {
  const url = req.query.url;
  console.log("!!!somebody register for webhook");
  webhooks.push(url);
  res.end();
}, 5000);

app.delete("/webhook", (req, res) => {
  const url = req.query.url;
  webhooks = webhooks.filter((el) => el !== url);
  res.end();
});

app.post("/webhook", (req, res) => {});

app.listen(5555, () => console.log("listening to 5555"));

const experss = require("express");
const axios = require("axios").default;
const bodyParser = require("body-parser");

const app = experss();
app.use(bodyParser.json());
app.get("/test", (req, res) => {
  console.log("Someone pinged me", req.rawHeaders);

  res.send("It's working!!! (Konstantin)");
});

app.post("/user/message", (req, res) => {
  console.log(req.body);
  res.end();
});
//1f0a-184-162-103-26.ngrok.io
https: app.listen(5555, () => {
  console.log("listening on port 5555");
});

// setInterval(() => {
//     const message = fakeMessages[Math.floor(Math.random() * 3)]

//     //console.log(message)

//     webhoors.forEach((url) => {
//         axios.post(url, message)
//     })
// }, 10000)

// const fakeMessages = [
//     "Hey, I have a problem with my order",
//     "I'd like to return my purchase",
//     "Do you have any new promos?",
// ]

// const webhooks = []

// app.post("/webhook", (req, res) => {
//     const url = req.query.url

//     webhooks.push(url)

//     res.end()
// })
