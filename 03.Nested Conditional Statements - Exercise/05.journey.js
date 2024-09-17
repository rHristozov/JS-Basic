function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let place;
  let destination;

  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season == 'summer') {
      place = 'Camp';
      price = budget * 0.3;
    } else {
      place = 'Hotel';
      price = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = 'Balkans';
    if (season == 'summer') {
      place = 'Camp';
      price = budget * 0.4;
    } else {
      place = 'Hotel';
      price = budget * 0.8;
    }
  } else {
    destination = 'Europe';
    place = 'Hotel';
    price = budget * 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${price.toFixed(2)}`);
}

journey(['50', 'summer']);
