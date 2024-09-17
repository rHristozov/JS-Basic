function salary(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i < tabs + 2; i++) {
    let website = input[i];
    if (website === 'Facebook') {
      salary -= 150;
    } else if (website === 'Instagram') {
      salary -= 100;
    } else if (website === 'Reddit') {
      salary -= 50;
    }
    if (salary <= 0) {
      console.log('You have lost your salary.');
      break;
    }
  }
  if (salary > 0) {
    console.log(salary);
  }
}

salary(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg']);
