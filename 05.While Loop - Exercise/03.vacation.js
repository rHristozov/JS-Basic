function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let availableMoney = Number(input[1]);
  let days = 0;
  let badDays = 0;

  index = 2;
  let row = input[index];
  index++;

  while (availableMoney < moneyNeeded) {
    if (row === 'spend') {
      row = Number(input[index]);
      index++;
      availableMoney -= row;
      badDays++;
      days++;
      if (availableMoney < 0) {
        availableMoney = 0;
      }
      if (badDays >= 5) {
        console.log(`You can't save the money.`);
        console.log(days);
      }
    } else {
      row = Number(input[index]);
      index++;
      badDays = 0;
      days++;
      availableMoney += row;
    }
    row = input[index];
    index++;
  }
  if (availableMoney >= moneyNeeded) {
    console.log(`You saved the money for ${days} days.`);
  }
}

vacation([
  '250',
  '150',
  'spend',
  '50',
  'spend',
  '50',
  'save',
  '100',
  'save',
  '100',
]);
