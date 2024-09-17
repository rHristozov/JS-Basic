function minNumber(input) {
  let index = 0;
  let command = input[index];
  let number = Number.MAX_SAFE_INTEGER;
  index++;
  while (command !== 'Stop') {
    let numberTwo = Number(command);
    if (number > numberTwo) {
      number = numberTwo;
    }
    command = input[index];
    index++;
  }
  console.log(number);
}
minNumber(['-10', '20', '-30', 'Stop']);
