function vowelsSum(input) {
  let word = input[0];
  let sum = 0;
  for (i = 0; i < word.length; i++) {
    let vowel = word[i];
    switch (vowel) {
      case 'a':
        sum += 1;
        break;
      case 'e':
        sum += 2;
        break;
      case 'i':
        sum += 3;
        break;
      case 'o':
        sum += 4;
        break;
      case 'u':
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

vowelsSum(['bamboo']);
