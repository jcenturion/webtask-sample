var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express(); 

app.use(bodyParser.json());

app.get('/', function (req, res) {
  req.webtaskContext.storage.set({ counter: 1 }, { force: 1 }, function (error) {
    // if (error) return cb(error);
    //... 
    res.sendStatus(200);   
  })
});  

app.post('/', function (req, res) { 
  res.sendStatus(204);
});
   
module.exports = Webtask.fromExpress(app);