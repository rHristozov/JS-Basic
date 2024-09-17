function basketballEquipment(input) {
  let tax = Number(input[0]);

  let shoes = tax * 0.6;
  let ekip = shoes * 0.8;
  let ball = (1 / 4) * ekip;
  let accessories = (1 / 5) * ball;

  let sumTotal = tax + shoes + ekip + ball + accessories;
  console.log(sumTotal);
}

basketballEquipment(['365']);
