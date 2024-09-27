process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
});
