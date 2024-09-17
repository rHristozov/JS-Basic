function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veganMenu = Number(input[2]);

  let sumOfChickenMenu = 10.35 * chickenMenu;
  let sumOfFishMenu = 12.4 * fishMenu;
  let sumOfVeganMenu = 8.15 * veganMenu;

  let sumTotalMenu = sumOfChickenMenu + sumOfFishMenu + sumOfVeganMenu;

  sumTotalMenu += sumTotalMenu * 0.2 + 2.5;

  console.log(sumTotalMenu);
}

foodDelivery(['2 ', '4 ', '3 ']);
