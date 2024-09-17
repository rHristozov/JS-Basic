function trainTheTrainers(input) {
  let n = Number(input[0]);
  let index = 1;
  let command = input[index];
  let totalGrade = 0;
  let count = 0;
  index++;

  while (command !== 'Finish') {
    let name = command;
    let grade = 0;
    for (i = 0; i < n; i++) {
      grade += Number(input[index]);
      totalGrade += Number(input[index]);
      count++;
      index++;
    }
    grade /= n;
    console.log(`${name} - ${grade.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  let averageGrade = totalGrade / count;
  console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}

trainTheTrainers([
  '2',
  'While-Loop',
  '6.00',
  '5.50',
  'For-Loop',
  '5.84',
  '5.66',
  'Finish',
]);
