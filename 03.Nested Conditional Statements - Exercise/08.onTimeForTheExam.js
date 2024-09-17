function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);
  let time = 0;
  let hours = 0;
  let minutes = 0;

  let exam = examHour * 60 + examMinute;
  let arrive = arriveHour * 60 + arriveMinute;

  if (exam == arrive) {
    console.log('On time');
  } else if (arrive > exam) {
    console.log('Late');
    time = Math.abs(arrive - exam);
    if (time >= 60) {
      hours = Math.floor(time / 60);
      minutes = time % 60;
      if (minutes <= 9) {
        console.log(`${hours}:0${minutes} hours after the start`);
      } else {
        console.log(`${hours}:${minutes} hours after the start`);
      }
    } else {
      console.log(`${time} minutes after the start`);
    }
  } else {
    time = Math.abs(arrive - exam);
    if (time >= 0 && time <= 30) {
      console.log('On time');
      if (time <= 30 && time != 0) {
        console.log(`${time} minutes before the start`);
      }
    } else if (time > 30) {
      console.log('Early');
      if (time >= 60) {
        hours = Math.floor(time / 60);
        minutes = time % 60;
        if (minutes <= 9) {
          console.log(`${hours}:0${minutes} hours before the start`);
        } else {
          console.log(`${hours}:${minutes} hours before the start`);
        }
      } else {
        console.log(`${time} minutes before the start`);
      }
    }
  }
}

onTimeForTheExam(['11', '30', '12', '29']);
