function trekkingMania(input) {
  let groups = Number(input[0]);

  let people = 0;
  let musalaGroup = 0;
  let monblanGroup = 0;
  let kiliGroup = 0;
  let k2Group = 0;
  let everestGroup = 0;

  for (let i = 1; i <= groups; i++) {
    let groupSize = Number(input[i]);
    people += groupSize;
    if (groupSize <= 5) {
      musalaGroup += groupSize;
    } else if (groupSize <= 12) {
      monblanGroup += groupSize;
    } else if (groupSize <= 25) {
      kiliGroup += groupSize;
    } else if (groupSize <= 40) {
      k2Group += groupSize;
    } else {
      everestGroup += groupSize;
    }
  }
  let averageMusala = (musalaGroup / people) * 100;
  let averageMonblan = (monblanGroup / people) * 100;
  let averageKili = (kiliGroup / people) * 100;
  let averageK2 = (k2Group / people) * 100;
  let averageEverest = (everestGroup / people) * 100;
  console.log(`${averageMusala.toFixed(2)}%`);
  console.log(`${averageMonblan.toFixed(2)}%`);
  console.log(`${averageKili.toFixed(2)}%`);
  console.log(`${averageK2.toFixed(2)}%`);
  console.log(`${averageEverest.toFixed(2)}%`);
}
trekkingMania([
  '10',
  '10',
  '5',
  '1',
  '100',
  '12',
  '26',
  '17',
  '37',
  '40',
  '78',
]);
