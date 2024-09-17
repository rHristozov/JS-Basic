function petShop(input) {
  let foodForDogs = Number(input[0]);
  let foodForCats = Number(input[1]);

  let result = foodForDogs * 2.5 + foodForCats * 4;

  console.log(result + ' lv.');
}

petShop(['5', '4']);
