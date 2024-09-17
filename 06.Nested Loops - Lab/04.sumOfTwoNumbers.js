function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let count = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let m = start; m <= end; m++) {
      count++;
      if (i + m === magicNumber) {
        console.log(`Combination N:${count} (${i} + ${m} = ${magicNumber})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${count} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(['23', '24', '20']);
