function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let count = Number(input[2]);
  let price = 0;

  if (season == 'Spring') {
    price += 3000;
  } else if (season == 'Summer' || season == 'Autumn') {
    price += 4200;
  } else {
    price += 2600;
  }

  if (count <= 6) {
    price *= 0.9;
  } else if (count >= 7 && count <= 11) {
    price *= 0.85;
  } else {
    price *= 0.75;
  }

  if (season != 'Autumn' && count % 2 == 0) {
    price *= 0.95;
  }

  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = price - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoat(['3000', 'Summer', '11']);
