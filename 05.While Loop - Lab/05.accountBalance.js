function accountBalance(input) {
  let i = 0;
  let data = input[i];
  let sum = 0;
  while (data !== 'NoMoreMoney') {
    let number = Number(input[i]);
    if (number <= 0) {
      console.log('Invalid operation!');
      break;
    }
    sum += number;
    console.log(`Increase: ${number.toFixed(2)}`);
    i++;
    data = input[i];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(['120', '45.55', '-150']);
