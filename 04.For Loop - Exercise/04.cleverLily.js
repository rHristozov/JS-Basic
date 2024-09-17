function cleverLily(input) {
  let birthDays = Number(input[0]);
  let priceOfWM = Number(input[1]);
  let priceOfToy = Number(input[2]);

  let savedMoney = 0;
  let birthDaysWithMoney = 0;

  for (let i = 1; i <= birthDays; i++) {
    if (i % 2 === 0) {
      savedMoney += (i / 2) * 10 - 1;
      birthDaysWithMoney++;
    } else {
      savedMoney += priceOfToy;
    }
  }

  if (savedMoney >= priceOfWM) {
    let moneyLeft = savedMoney - priceOfWM;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = priceOfWM - savedMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLily(['21', '1570.98', '3']);
