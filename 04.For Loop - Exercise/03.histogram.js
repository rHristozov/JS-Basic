function histogram(input) {
  let count = Number(input[0]);
  p1 = 0;
  p2 = 0;
  p3 = 0;
  p4 = 0;
  p5 = 0;

  for (i = 1; i <= count; i++) {
    let number = Number(input[i]);
    if (number < 200) {
      p1++;
    } else if (number <= 399) {
      p2++;
    } else if (number <= 599) {
      p3++;
    } else if (number <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let p1P = (p1 / count) * 100;
  let p2P = (p2 / count) * 100;
  let p3P = (p3 / count) * 100;
  let p4P = (p4 / count) * 100;
  let p5P = (p5 / count) * 100;

  console.log(`${p1P.toFixed(2)}%`);
  console.log(`${p2P.toFixed(2)}%`);
  console.log(`${p3P.toFixed(2)}%`);
  console.log(`${p4P.toFixed(2)}%`);
  console.log(`${p5P.toFixed(2)}%`);
}

histogram(['7', '800', '801', '250', '199', '399', '599', '799']);
