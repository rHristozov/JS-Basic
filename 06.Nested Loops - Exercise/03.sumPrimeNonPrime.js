function sumPrimeNonPrime(input) {
  index = 0;
  command = input[index];
  index++;
  let sumOfAllPrime = 0;
  let sumOfAllNonPrime = 0;

  while (command !== 'stop') {
    let number = Number(command);
    let isPrime = true;
    if (number === 0) {
      sumOfAllNonPrime += number;
    }
    if (number < 0) {
      console.log(`Number is negative.`);
      command = input[index];
      index++;
      continue;
    }
    for (i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sumOfAllPrime += number;
    } else {
      sumOfAllNonPrime += number;
    }
    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumOfAllPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumOfAllNonPrime}`);
}

sumPrimeNonPrime(['30', '83', '33', '-1', '20', 'stop']);
