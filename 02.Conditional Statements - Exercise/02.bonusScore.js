function bonusScore(input) {
  let points = Number(input[0]);
  let bonusPoints = 0;

  if (points <= 100) {
    bonusPoints = 5;
  } else if (points <= 1000) {
    bonusPoints = 0.2 * points;
  } else {
    bonusPoints = 0.1 * points;
  }

  if (points % 2 == 0) {
    bonusPoints += 1;
  } else if (points % 10 == 5) {
    bonusPoints += 2;
  }

  points += bonusPoints;
  console.log(bonusPoints);
  console.log(points);
}

bonusScore(['20']);
