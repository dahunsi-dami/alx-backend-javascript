process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const readline = process.stdin.read();

  if (readline) {
    const name = readline.toString();
    process.stdout.write(`Your name is: ${name}`);
    if (!process.stdin.isTTY) {
      process.stdout.write('This important software is now closing\n');
    }
    process.exit();
  }

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
});
