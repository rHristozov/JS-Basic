function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let volume = width * height * length;

  let index = 3;
  let currentRow = input[index];

  while (currentRow !== 'Done') {
    let boxes = Number(currentRow);
    volume -= boxes;
    if (volume <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
      );
      break;
    }
    index++;
    currentRow = input[index];
  }
  if (volume > 0) {
    console.log(`${volume} Cubic meters left.`);
  }
}

moving(['10', '1', '2', '4', '6', 'Done']);
