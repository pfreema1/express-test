var express = require('express');
var app = express();

// middleware
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  //   res.send('Hello Express');
  const path = __dirname + '/views/index.html';
  res.sendFile(path);
});

app.get('/json', function(req, res) {
  let obj = {
    message: 'Hello json'
  };

  res.json(obj);
});

module.exports = app;
