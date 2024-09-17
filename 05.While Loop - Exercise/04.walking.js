function walking(input) {
  let index = 0;
  let command = input[index];
  let steps = 0;
  while (steps <= 10000) {
    command = input[index];
    if (command === 'Going home') {
      index++;
      command = Number(input[index]);
      steps += command;
      break;
    } else {
      command = Number(input[index]);
      steps += command;
      index++;
    }
  }
  if (steps >= 10000) {
    console.log(`Goal reached! Good job!
${steps - 10000} steps over the goal!
`);
  } else {
    console.log(`${10000 - steps} more steps to reach goal.`);
  }
}
walking(['1500', '300', '2500', '3000', 'Going home', '200']);
