function newHouse(input) {
  let flower = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  if (flower == 'Roses') {
    price = count * 5;
    if (count > 80) {
      price *= 0.9;
    }
  } else if (flower == 'Dahlias') {
    price = count * 3.8;
    if (count > 90) {
      price *= 0.85;
    }
  } else if (flower == 'Tulips') {
    price = count * 2.8;
    if (count > 80) {
      price *= 0.85;
    }
  } else if (flower == 'Narcissus') {
    price = count * 3;
    if (count < 120) {
      price *= 1.15;
    }
  } else if (flower == 'Gladiolus') {
    price = count * 2.5;
    if (count < 80) {
      price *= 1.2;
    }
  }

  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(
      `Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyNeeded = price - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}

newHouse(['Narcissus', '119', '360']);
