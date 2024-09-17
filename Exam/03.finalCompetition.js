function finalCompetition(input) {
  let dancers = Number(input[0]);
  let points = Number(input[1]);
  let season = input[2];
  let place = input[3];

  let sum = 0;

  if (place === 'Bulgaria') {
    sum = dancers * points;
    if (season === 'summer') {
      sum *= 0.95;
    } else if (season === 'winter') {
      sum *= 0.92;
    }
  } else if (place === 'Abroad') {
    sum = dancers * points * 1.5;
    if (season === 'summer') {
      sum *= 0.9;
    } else if (season === 'winter') {
      sum *= 0.85;
    }
  }
  let charitySum = sum * 0.75;
  sum -= charitySum;
  let pricePerDancer = sum / dancers;
  console.log(`Charity - ${charitySum.toFixed(2)}`);
  console.log(`Money per dancer - ${pricePerDancer.toFixed(2)}`);
}

finalCompetition(['1', '89.5', 'summer', 'Abroad']);
