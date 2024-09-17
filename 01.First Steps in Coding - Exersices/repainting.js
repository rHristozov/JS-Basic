function repainting(input) {
  let nylon = Number(input[0]);
  let ink = Number(input[1]);
  let inkThinner = Number(input[2]);
  let hoursForWork = Number(input[3]);

  let sumOfNylon = 1.5 * (nylon + 2);
  let moreInk = ink * 0.1;
  let sumOfInk = 14.5 * (ink + moreInk);
  let sumOfInkThinner = 5 * inkThinner;

  let sumOfMaterials = sumOfInk + sumOfInkThinner + sumOfNylon + 0.4;

  let sumOfWork = sumOfMaterials * 0.3;
  let sumHoursForWork = sumOfWork * hoursForWork;

  let totalSum = sumHoursForWork + sumOfMaterials;

  console.log(totalSum);
}

repainting(['10 ', '11 ', '4 ', '8 ']);
