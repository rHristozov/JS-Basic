function lunchBreak(input) {
  let name = input[0];
  let durationOfSerial = Number(input[1]);
  let durationOfLunch = Number(input[2]);

  let lunchTime = (durationOfLunch * 1) / 8;
  let freeTime = (durationOfLunch * 1) / 4;

  durationOfLunch -= lunchTime + freeTime;

  if (durationOfLunch >= durationOfSerial) {
    let timeLeft = Math.ceil(durationOfLunch - durationOfSerial);
    console.log(
      `You have enough time to watch ${name} and left with ${timeLeft} minutes free time.`
    );
  } else {
    let timeNeeded = Math.ceil(durationOfSerial - durationOfLunch);
    console.log(
      `You don't have enough time to watch ${name}, you need ${timeNeeded} more minutes.`
    );
  }
}

lunchBreak(['Game of Thrones', '60', '96']);
