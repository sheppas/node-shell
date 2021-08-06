process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    let pwd = require("./pwd");
    pwd();
   } else if (cmd === 'ls') {
     let ls = require("./ls")
     ls();
   } else if (cmd.split(" ")[0]==="cat") {

    let cat = require("./cat")
    cat(cmd.split(" ").slice(1));
  } 
   else {
    process.stdout.write("You typed: " + cmd);
  }

});
