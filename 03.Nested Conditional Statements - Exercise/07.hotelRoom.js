function hotelRoom(input) {
  let month = input[0];
  let days = Number(input[1]);
  let priceForStudio = 0;
  let priceForApartment = 0;

  switch (month) {
    case 'May':
    case 'October':
      priceForStudio = days * 50;
      priceForApartment = days * 65;
      if (days > 7 && days <= 14) {
        priceForStudio *= 0.95;
      } else if (days > 14) {
        priceForStudio *= 0.7;
        priceForApartment *= 0.9;
      }
      break;
    case 'June':
    case 'September':
      priceForStudio = days * 75.2;
      priceForApartment = days * 68.7;
      if (days > 14) {
        priceForStudio *= 0.8;
        priceForApartment *= 0.9;
      }
      break;
    case 'July':
    case 'August':
      priceForStudio = days * 76;
      priceForApartment = days * 77;
      if (days > 14) {
        priceForApartment *= 0.9;
      }
      break;
    default:
      break;
  }
  console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);
