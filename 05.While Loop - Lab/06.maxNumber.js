function maxNumber(input) {
  let index = 0;
  let command = input[index];
  let number = Number.MIN_SAFE_INTEGER;
  index++;
  while (command !== 'Stop') {
    let numberTwo = Number(command);
    if (numberTwo > number) {
      number = numberTwo;
    }
    command = input[index];
    index++;
  }
  console.log(number);
}
maxNumber(['-1', '-2', 'Stop']);
