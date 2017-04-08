module.exports = function (express) {
  var app = express();
  
  app.get('/', function (req, res) {
    res.status(200).send('working');
  });
  
  return app;
};
