function grandpaStavri(input) {
  let days = Number(input[0]);
  let liters = 0;
  let litersSum = 0;
  let degrees = 0;
  let degreesSum = 0;
  let index = 1;
  for (let i = 0; i < days; i++) {
    liters = Number(input[index]);
    litersSum += liters;
    index++;
    degrees = Number(input[index]) * liters;
    degreesSum += degrees;
    index++;
  }
  let averageDegrees = degreesSum / litersSum;

  console.log(`Liter: ${litersSum.toFixed(2)}`);
  console.log(`Degrees: ${averageDegrees.toFixed(2)}`);
  if (averageDegrees < 38) {
    console.log(`Not good, you should baking!`);
  } else if (averageDegrees >= 38 && averageDegrees < 42) {
    console.log(`Super!`);
  } else if (averageDegrees >= 42) {
    console.log(`Dilution with distilled water!`);
  }
}

grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);
