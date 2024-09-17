function graduation(input) {
  let name = input[0];
  let index = 1;

  let count = 0;
  let grade = Number(input[index]);
  index++;
  let negativeGrade = 0;
  let grades = 0;

  while (count < 12 && negativeGrade < 2) {
    if (grade >= 4) {
      grades += grade;
      grade = Number(input[index]);
      index++;
      count++;
    } else {
      negativeGrade++;
      grade = Number(input[index]);
      count++;
      index++;
    }
  }
  if (negativeGrade === 2) {
    console.log(`${name} has been excluded at ${count - 1} grade`);
  } else {
    console.log(
      `${name} graduated. Average grade: ${(grades / 12).toFixed(2)}`
    );
  }
}
graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);
