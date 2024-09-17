function pcStore(input) {
  let priceForCPU = Number(input[0]);
  let priceForMotherboard = Number(input[1]);
  let priceForRAM = Number(input[2]);
  let countRam = Number(input[3]);
  let discount = Number(input[4]);

  priceForCPU *= 1.57;
  priceForMotherboard *= 1.57;
  priceForRAM *= 1.57;
  priceForRAM *= countRam;
  priceForCPU -= priceForCPU * discount;
  priceForMotherboard -= priceForMotherboard * discount;
  let price = priceForCPU + priceForMotherboard + priceForRAM;
  console.log(`Money needed - ${price.toFixed(2)} leva.`);
}

pcStore([500, 200, 80, 2, 0.05]);
