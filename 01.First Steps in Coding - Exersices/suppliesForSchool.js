function suppliesForSchool(input) {
  let pen = Number(input[0]);
  let marker = Number(input[1]);
  let preparat = Number(input[2]);
  let discount = Number(input[3]) / 100;

  let sumOfPens = 5.8 * pen;
  let sumOfMarkers = 7.2 * marker;
  let sumOfPreparat = 1.2 * preparat;

  let sumTotal = sumOfMarkers + sumOfPens + sumOfPreparat;
  let sumDiscount = sumTotal * discount;
  sumTotal -= sumDiscount;

  console.log(sumTotal);
}

suppliesForSchool(['2 ', '3 ', '4 ', '25 ']);
