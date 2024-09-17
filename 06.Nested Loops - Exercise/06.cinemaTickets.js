function cinemaTickets(input) {
  let command = input[0];
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let totalTickets = 0;

  index = 1;

  while (command !== 'Finish') {
    let movieSeats = 0;
    let name = command;
    let seats = Number(input[index]);
    index++;
    for (i = 0; i < seats; i++) {
      command = input[index];
      index++;
      if (command === 'End') {
        command = input[index];
        index++;
        let movieSpace = (movieSeats / seats) * 100;
        console.log(`${name} - ${movieSpace.toFixed(2)}% full.`);
        break;
      } else if (command === 'student') {
        studentTickets++;
      } else if (command === 'standard') {
        standardTickets++;
      } else if (command === 'kid') {
        kidTickets++;
      }
      totalTickets++;
      movieSeats++;
      command = input[index];
      if (movieSeats === seats) {
        let movieSpace = (movieSeats / seats) * 100;
        console.log(`${name} - ${movieSpace.toFixed(2)}% full.`);
      }
    }
  }
  let percentageStudent = (studentTickets / totalTickets) * 100;
  let percentageStandard = (standardTickets / totalTickets) * 100;
  let percentageKid = (kidTickets / totalTickets) * 100;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${percentageStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentageStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentageKid.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  'The Matrix',
  '20',
  'student',
  'standard',
  'kid',
  'kid',
  'student',
  'student',
  'standard',
  'student',
  'End',
  'The Green Mile',
  '17',
  'student',
  'standard',
  'standard',
  'student',
  'standard',
  'student',
  'End',
  'Amadeus',
  '3',
  'standard',
  'standard',
  'standard',
  'Finish',
]);
