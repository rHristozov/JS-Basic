function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;

  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      if (fruit == 'banana') {
        price = quantity * 2.5;
      } else if (fruit == 'apple') {
        price = quantity * 1.2;
      } else if (fruit == 'orange') {
        price = quantity * 0.85;
      } else if (fruit == 'grapefruit') {
        price = quantity * 1.45;
      } else if (fruit == 'kiwi') {
        price = quantity * 2.7;
      } else if (fruit == 'pineapple') {
        price = quantity * 5.5;
      } else if (fruit == 'grapes') {
        price = quantity * 3.85;
      } else {
        console.log('error');
      }
      break;
    case 'Saturday':
    case 'Sunday':
      if (fruit == 'banana') {
        price = quantity * 2.7;
      } else if (fruit == 'apple') {
        price = quantity * 1.25;
      } else if (fruit == 'orange') {
        price = quantity * 0.9;
      } else if (fruit == 'grapefruit') {
        price = quantity * 1.6;
      } else if (fruit == 'kiwi') {
        price = quantity * 3.0;
      } else if (fruit == 'pineapple') {
        price = quantity * 5.6;
      } else if (fruit == 'grapes') {
        price = quantity * 4.2;
      } else {
        console.log('error');
      }
      break;
    default:
      console.log('error');
      break;
  }
  if (price != 0) {
    console.log(price.toFixed(2));
  }
}

fruitShop(['apple', 'Tuesday', '2']);
