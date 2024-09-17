function operationsBetweenNumbers(input) {
  let numberOne = Number(input[0]);
  let numberTwo = Number(input[1]);
  let operation = input[2];
  let result = 0;
  let status;

  if (numberTwo != 0) {
    switch (operation) {
      case '+':
        result = numberOne + numberTwo;
        if (result % 2 == 0) {
          console.log(`${numberOne} + ${numberTwo} = ${result} - even`);
        } else {
          console.log(`${numberOne} + ${numberTwo} = ${result} - odd`);
        }
        break;
      case '-':
        result = numberOne - numberTwo;
        if (result % 2 == 0) {
          console.log(`${numberOne} - ${numberTwo} = ${result} - even`);
        } else {
          console.log(`${numberOne} - ${numberTwo} = ${result} - odd`);
        }
        break;
      case '*':
        result = numberOne * numberTwo;
        if (result % 2 == 0) {
          console.log(`${numberOne} * ${numberTwo} = ${result} - even`);
        } else {
          console.log(`${numberOne} * ${numberTwo} = ${result} - odd`);
        }
        break;
      case '/':
        result = numberOne / numberTwo;
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`);
        break;
      case '%':
        result = numberOne % numberTwo;
        console.log(`${numberOne} % ${numberTwo} = ${result}`);
        break;
      default:
        break;
    }
  } else {
    console.log(`Cannot divide ${numberOne} by zero`);
  }
}

operationsBetweenNumbers(['10', '12', '+']);
