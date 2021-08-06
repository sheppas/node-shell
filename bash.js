const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("prompt >");
 }



process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    let pwd = require("./pwd");
    pwd(done);
  } else if (cmd === "ls") {
    let ls = require("./ls");
    ls(done);
  } else if (cmd.split(" ")[0] === "cat") {
    let cat = require("./cat");
    cat(cmd.split(" ").slice(1));
  } else if (cmd.split(" ")[0] === "curl") {
    let curl = require("./curl");
    curl(cmd.split(" ")[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
