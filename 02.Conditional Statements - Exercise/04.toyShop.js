function toyShop(input) {
  let moneyForVacation = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

  let toySum =
    2.6 * puzzleCount +
    3 * dollCount +
    4.1 * bearCount +
    8.2 * minionCount +
    2 * truckCount;

  if (toyCount >= 50) {
    toySum *= 0.75;
  }

  toySum *= 0.9;

  if (toySum >= moneyForVacation) {
    let moneyLeft = toySum - moneyForVacation;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = moneyForVacation - toySum;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
