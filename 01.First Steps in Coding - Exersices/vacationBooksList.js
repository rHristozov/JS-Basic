function vacationBooksList(input) {
  let pagesInBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let sumTime = pagesInBook / pagesPerHour;
  let daysToComplete = sumTime / days;

  console.log(daysToComplete);
}

vacationBooksList(['212 ', '20 ', '2 ']);
