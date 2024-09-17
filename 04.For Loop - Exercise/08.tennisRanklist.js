function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let points = Number(input[1]);

  let earnedPoints = 0;
  let tournamentsWon = 0;

  for (i = 2; i < input.length; i++) {
    let rank = input[i];
    if (rank === 'W') {
      earnedPoints += 2000;
      tournamentsWon++;
    } else if (rank === 'F') {
      earnedPoints += 1200;
    } else {
      earnedPoints += 720;
    }
  }
  let averagePoints = earnedPoints / tournaments;
  let percentageVictory = (tournamentsWon / tournaments) * 100;

  console.log(`Final points: ${points + earnedPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentageVictory.toFixed(2)}%`);
}

tennisRanklist(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
