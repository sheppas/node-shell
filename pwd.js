module.exports = () => {
  const directory = process.cwd();
  process.stdout.write(`${directory}`);
  process.stdin.write("\nprompt > ");
};
