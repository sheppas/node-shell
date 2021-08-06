const request = require('request');

const curl = (url) => {
  request(url, function (err, response, body) {
    if (err) {
      throw err;
    }
    process.stdout.write(response);
    process.stdout.write(body);
  })
}

module.exports = curl;



