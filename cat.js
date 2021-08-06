const fs = require("fs");
const cat = (arr) => {
  arr.forEach((file) => {
    fs.readFile(file, 'utf8',function(err, filedata) {
        if(err){
            throw err;
        }

      process.stdout.write(filedata);
      
    });
  });
};

module.exports = cat;
