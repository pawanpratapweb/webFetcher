const express = require("express");
const request = require("request");
const port = process.env.port || 8000;
const app = express();

app.get("/", (req, res) => {
  console.log(req.query.url);
  request(req.query.url, function (error, response, body) {
    res.send(body);
  });
})

app.listen(port);