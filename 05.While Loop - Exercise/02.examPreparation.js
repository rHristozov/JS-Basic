function examPreparation(input) {
  index = 0;
  let badGrade = Number(input[index]);
  let badGradeCount = 0;
  index++;
  let nameOfProblem = input[index];
  index++;
  let totalGrades = 0;
  let totalGradesCount = 0;
  while (nameOfProblem !== 'Enough' && badGradeCount !== badGrade) {
    nameOfProblem = Number(input[index]);
    index++;
    if (nameOfProblem <= 4) {
      totalGrades += nameOfProblem;
      badGradeCount++;
      totalGradesCount++;
    } else {
      totalGrades += nameOfProblem;
      totalGradesCount++;
    }
    if (input[index] === 'Enough') {
      nameOfProblem = input[index - 2];
      break;
    } else {
      nameOfProblem = input[index];
      index++;
    }
  }
  if (badGrade === badGradeCount) {
    console.log(`You need a break, ${badGradeCount} poor grades.`);
  } else {
    console.log(
      `Average score: ${(totalGrades / totalGradesCount).toFixed(2)}`
    );
    console.log(`Number of problems: ${totalGradesCount}`);
    console.log(`Last problem: ${nameOfProblem}`);
  }
}

examPreparation([
  '3',
  'Money',
  '6',
  'Story',
  '4',
  'Spring Time',
  '5',
  'Bus',
  '6',
  'Enough',
]);
