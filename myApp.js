var express = require('express');
var app = express();

app.get('/', function(req, res) {
  //   res.send('Hello Express');
  const path = __dirname + '/views/index.html';
  res.sendFile(path);
});

module.exports = app;
