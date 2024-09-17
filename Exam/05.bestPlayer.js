function bestPlayer(input) {
  index = 0;
  let row = input[index];

  let bestPlayer = '';
  let bestPlayerGoals = 0;

  while (row !== 'END') {
    let player = input[index];
    index++;
    let goal = Number(input[index]);
    if (goal > bestPlayerGoals) {
      bestPlayerGoals = goal;
      bestPlayer = player;
    }
    if (bestPlayerGoals >= 10) {
      break;
    }
    index++;
    row = input[index];
  }
  console.log(`${bestPlayer} is the best player!`);
  if (bestPlayerGoals >= 3) {
    console.log(
      `He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`
    );
  } else {
    console.log(`He has scored ${bestPlayerGoals} goals.`);
  }
}

bestPlayer(['Silva', '5', 'Harry Kane', '10']);
