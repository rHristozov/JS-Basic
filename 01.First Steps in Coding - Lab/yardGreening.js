function yardGreening(input) {
  let area = Number(input[0]);

  let sum = area * 7.61;
  let discount = sum * 0.18;
  let finalSum = sum - discount;

  let resultForFinalPrice = `The final price is: ${finalSum} lv.`;
  let resultForDiscount = `The discount is: ${discount} lv.`;

  console.log(resultForFinalPrice);
  console.log(resultForDiscount);
}

yardGreening(['550']);
