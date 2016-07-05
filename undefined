var Request = require("superagent")
var url = 'https://api.github.com/repos/jcenturion/webtask-sample/contents/README.md?ref=master'
var Buffer = require('buffer').Buffer;
    
module.exports = function(ctx, cb) {
  var buffer = new Buffer('hola mundo');
  
  console.log(buffer.toString('base64'));
  
  cb(null);
  
  // Request
  //   .get(url)
  //   .end((err, res) => {
  //     if (err) {
  //       return cb(err);
  //     }

  //     Request
  //       .get(res.body.download_url)
  //       .end((err, res) => {
  //         if (err) {
  //           return cb(err);
  //         }
          
  //         cb(null, res.text);
  //       });
  //   });
}