function skiTrip(input) {
  let days = Number(input[0]);
  let place = input[1];
  let grade = input[2];
  let price = 0;

  if (place == 'room for one person') {
    price = (days - 1) * 18;
  } else if (place == 'apartment') {
    price = (days - 1) * 25;
    if (days < 10) {
      price *= 0.7;
    } else if (days >= 10 && days <= 15) {
      price *= 0.65;
    } else if (days > 15) {
      price *= 0.5;
    }
  } else if (place == 'president apartment') {
    price = (days - 1) * 35;
    if (days < 10) {
      price *= 0.9;
    } else if (days >= 10 && days <= 15) {
      price *= 0.85;
    } else if (days > 15) {
      price *= 0.8;
    }
  }
  if (grade == 'negative') {
    price *= 0.9;
  } else if (grade == 'positive') {
    price *= 1.25;
  }
  console.log(price.toFixed(2));
}
skiTrip(['14', 'apartment', 'positive']);
