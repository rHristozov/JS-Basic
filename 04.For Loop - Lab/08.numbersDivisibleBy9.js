function numbersDivisibleBy9(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let data = '';
  let sum = 0;

  for (i = start; i <= end; i++) {
    if (i % 9 === 0) {
      data += i + '\n';
      sum += i;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(data.trim());
}

numbersDivisibleBy9(['100', '200']);
