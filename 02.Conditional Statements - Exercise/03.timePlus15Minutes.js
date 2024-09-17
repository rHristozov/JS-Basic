function timePlus15Minutes(input) {
  let inputMinutes = Number(input[0]);
  let inputSeconds = Number(input[1]);

  let totalSeconds = 15 + inputSeconds + inputMinutes * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  if (minutes == 24) {
    minutes = 0;
  }

  if (seconds >= 10) {
    console.log(`${minutes}:${seconds}`);
  } else {
    console.log(`${minutes}:0${seconds}`);
  }
}

timePlus15Minutes(['1', '46']);
