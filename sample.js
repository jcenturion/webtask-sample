var express    = require('/data/_verquire/express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('node-js-compiler');
});

// test

module.exports = app;
