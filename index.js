module.exports = function (express) {
  var app = express();
  
  app.get('/', function (req, res) {
    res.sendStatus(200);
  });
  
  return app;
};
