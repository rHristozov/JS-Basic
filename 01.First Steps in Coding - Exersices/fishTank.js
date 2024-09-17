function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]);

  let area = length * width * height;
  let areaInLiters = area / 1000;
  let usedArea = percentage / 100;
  let litersNeeded = areaInLiters * (1 - usedArea);

  console.log(litersNeeded);
}

fishTank(['85 ', '75 ', '47 ', '17 ']);
