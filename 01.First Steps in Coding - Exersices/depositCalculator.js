function depositCalculator(input) {
  let deposited = Number(input[0]);
  let time = Number(input[1]);
  let rate = Number(input[2]);

  let sum = deposited + time * ((deposited * rate) / 100 / 12);
  console.log(sum);
}

depositCalculator(['200 ', '3 ', '5.7 ']);
