function areaOfFigures(input) {
  let figure = input[0];

  if (figure == 'square') {
    let length = Number(input[1]);
    let area = length * length;
    console.log(area.toFixed(3));
  } else if (figure == 'rectangle') {
    let length = Number(input[1]);
    let width = Number(input[2]);
    let area = length * width;
    console.log(area.toFixed(3));
  } else if (figure == 'circle') {
    let radius = Number(input[1]);
    let area = Math.PI * radius * radius;
    console.log(area.toFixed(3));
  } else {
    let length = Number(input[1]);
    let height = Number(input[2]);
    let area = (height * length) / 2;
    console.log(area.toFixed(3));
  }
}

areaOfFigures(['square', '5']);
