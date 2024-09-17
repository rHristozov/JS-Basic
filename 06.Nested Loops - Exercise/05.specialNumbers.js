function specialNumbers(input) {
  let number = Number(input[0]);
  let print = '';
  let isSpecial = false;
  let count = 0;
  for (let i = 1111; i < 9999; i++) {
    let numberStr = '' + i;
    for (let j = 0; j < 4; j++) {
      let del = Number(numberStr[j]);
      if (number % del === 0) {
        count++;
      }
    }
    if (count === 4) {
      print += i + ' ';
    }
    count = 0;
  }
  console.log(print);
}

specialNumbers(['3']);
