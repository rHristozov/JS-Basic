function worldSwimmingRecord(input) {
  let recordInSeconds = Number(input[0]);
  let rangeInMeters = Number(input[1]);
  let timeInSeconds = Number(input[2]);

  let tryRecord = rangeInMeters * timeInSeconds;
  let slowSeconds = Math.floor(rangeInMeters / 15) * 12.5;

  let totalTime = tryRecord + slowSeconds;

  if (totalTime >= recordInSeconds) {
    let secondsNeeded = totalTime - recordInSeconds;
    console.log(
      `No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  }
}

worldSwimmingRecord(['55555.67', '3017', '5.03']);
