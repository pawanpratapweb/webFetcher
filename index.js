const express = require("express");
const request = require("request");
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  request(req.query.url, function (error, response, body) {
    res.send(body);
  });
})

app.listen(port);
