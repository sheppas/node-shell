const fs = require("fs");
const cat = (arr, done) => {
  arr.forEach((file) => {
    fs.readFile(file, "utf8", function (err, filedata) {
      if (err) {
        done("something went wrong!");
      }
      done(filedata);
    });
  });
};
module.exports = cat;
