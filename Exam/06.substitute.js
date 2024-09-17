function substitute(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let thirdNumber = Number(input[2]);
  let forthNumber = Number(input[3]);
  let count = 0;
  let isEnough = false;

  for (let k = firstNumber; k <= 8; k++) {
    for (let l = 9; l >= secondNumber; l--) {
      for (let m = thirdNumber; m <= 8; m++) {
        for (let n = 9; n >= forthNumber; n--) {
          let numberOne = 10 * k + l;
          let numberTwo = 10 * m + n;
          if (k % 2 === 0 && m % 2 === 0 && l % 2 === 1 && n % 2 === 1) {
            if (numberOne === numberTwo) {
              console.log(`Cannot change the same player.`);
            } else {
              console.log(`${k}${l} - ${m}${n}`);
              count++;
              if (count === 6) {
                isEnough = true;
                break;
              }
            }
          }
        }
        if (count === 6) {
          isEnough = true;
          break;
        }
      }
      if (count === 6) {
        isEnough = true;
        break;
      }
    }
    if (count === 6) {
      isEnough = true;
      break;
    }
  }
}
substitute(['6', '7', '5', '6']);
