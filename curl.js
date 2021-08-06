const request = require('request');

const curl = (url, done) => {
  request(url, function (err, response, body) {
    if (err) {
      done('something went wrong!');
    }
    done(response);
    done(body);
  })
}

module.exports = curl;



