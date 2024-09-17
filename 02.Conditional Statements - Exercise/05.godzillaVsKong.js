function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let actors = Number(input[1]);
  let clothes = Number(input[2]);

  let sumForDecor = 0.1 * budget;
  let sumForClothes = actors * clothes;

  if (actors > 150) {
    sumForClothes *= 0.9;
  }

  let sumForMovie = sumForClothes + sumForDecor;

  if (budget >= sumForMovie) {
    let moneyLeft = budget - sumForMovie;
    console.log('Action!');
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  } else {
    let moneyNeeded = sumForMovie - budget;
    console.log('Not enough money!');
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  }
}

godzillaVsKong(['15437.62', '186', '57.99']);
