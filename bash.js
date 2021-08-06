process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const directory = process.cwd();
    process.stdout.write(`${directory}`);
  }else{
    process.stdout.write("You typed: " + cmd);
  }
  process.stdin.write("\nprompt > ");
});
