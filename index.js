var Request = require("superagent")
var url = 'https://api.github.com/repos/jcenturion/webtask-sample/contents/README.md?ref=master'
    
module.exports = function(ctx, cb) {
  // TODO: update it.
  Request
    .get(url)
    .end((err, res) => {
      if (err) {
        return cb(err);
      }

      Request
        .get(res.body.download_url)
        .end((err, res) => {
          if (err) {
            return cb(err);
          }
          
          cb(null, res.text);
        });
    });
}
