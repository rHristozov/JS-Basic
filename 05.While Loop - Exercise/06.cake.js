function cake(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let areaOfCake = width * length;

  let index = 2;
  let currentRow = input[index];

  while (currentRow !== 'STOP') {
    let pieces = Number(currentRow);
    areaOfCake -= pieces;
    if (areaOfCake <= 0) {
      console.log(
        `No more cake left! You need ${Math.abs(areaOfCake)} pieces more.`
      );
      break;
    }
    index++;
    currentRow = input[index];
  }
  if (areaOfCake > 0) {
    console.log(`${areaOfCake} pieces are left.`);
  }
}
cake(['10', '2', '2', '4', '6', 'STOP']);
