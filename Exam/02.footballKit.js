function footballKit(input) {
  let priceForTshirt = Number(input[0]);
  let neededPrice = Number(input[1]);

  let priceForPants = priceForTshirt * 0.75;
  let priceForSocks = priceForPants * 0.2;
  let priceForShoes = (priceForTshirt + priceForPants) * 2;
  let totalAmount =
    priceForTshirt + priceForPants + priceForSocks + priceForShoes;
  totalAmount *= 0.85;

  if (totalAmount >= neededPrice) {
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${totalAmount.toFixed(2)} lv.`);
  } else {
    let sum = neededPrice - totalAmount;
    console.log(`No, he will not earn the world-cup replica ball.`);
    console.log(`He needs ${sum.toFixed(2)} lv. more.`);
  }
}

footballKit([25, 100]);
