function shopping(input) {
  let budget = Number(input[0]);
  let motherBoardCount = Number(input[1]);
  let cpuCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let sumMotherBoard = 250 * motherBoardCount;

  let priceCpu = sumMotherBoard * 0.35;
  let sumCpu = cpuCount * priceCpu;

  let priceRam = sumMotherBoard * 0.1;
  let sumRam = ramCount * priceRam;

  let totalSum = sumMotherBoard + sumCpu + sumRam;

  if (motherBoardCount > cpuCount) {
    totalSum *= 0.85;
  }

  if (budget >= totalSum) {
    let priceLeft = budget - totalSum;
    console.log(`You have ${priceLeft.toFixed(2)} leva left!`);
  } else {
    let priceNeeded = totalSum - budget;
    console.log(
      `Not enough money! You need ${priceNeeded.toFixed(2)} leva more!`
    );
  }
}

shopping(['900', '2', '1', '3']);
