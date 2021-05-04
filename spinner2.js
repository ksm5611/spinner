const spinner = '|/-\\|/-\\\n';

let startTime = 100;

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}`);
  }, startTime);
  startTime += 200;
}
