function concatenateData(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = Number(input[2]);
  let town = input[3];

  let greeting = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
  console.log(greeting);
}

concatenateData(['Roman', 'Hristozov', '30', 'Kardzhali']);
