function numbersOneToNWithStepThree(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}

numbersOneToNWithStepThree(['15']);
