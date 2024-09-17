function sequence(input) {
  let n = Number(input[0]);
  let i = 1;
  while (n >= i) {
    console.log(i);
    i = i * 2 + 1;
  }
}

sequence(['31']);
