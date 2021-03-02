import _ from './util.js';

const plateStuff = {
  x: 400,
  y: 400,
  radius: 300,
  startAngle: Math.PI * 1.5,
  endAngle: Math.PI * 2,
  anticlockwise: false
}

const Hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const addText = (context, category, midAngle) => {
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "24pt Century Gothic Bold";
  context.fillStyle = "#fff";
  context.fillText(category, 400 + Math.cos(midAngle) * 260, 400 + Math.sin(midAngle) * 260);
}

const numberPlate = ({ context, plateStuff }) => {
  const { x, y, radius, startAngle, endAngle, anticlockwise } = plateStuff;
  let angle = startAngle;
  Hexadecimal.forEach((hex, i) => {
    const nextAngle = angle + endAngle / Hexadecimal.length;
    context.beginPath();
    context.strokeStyle = '#000';
    context.fillStyle = '#F77269';
    context.moveTo(x, x);
    context.arc(x, y, radius, angle, nextAngle, anticlockwise);
    context.lineTo(x, x);
    context.fill();
    context.stroke();
    const midAngle = (angle + nextAngle) / 2;
    addText(context, hex, midAngle);
    context.closePath();
    angle = nextAngle;
  })
}

const arrowPlate = ({ context, plateStuff }) => {
  const { x, y, radius, endAngle, anticlockwise } = plateStuff;
  context.beginPath();
  context.arc(x, y, radius / 3, 0, endAngle, anticlockwise);
  context.fill();
  context.stroke();
  context.closePath();
}


const renderPlate = ({ context, plateStuff }) => {
  numberPlate({ context, plateStuff });
  arrowPlate({ context, plateStuff });
}



const $canvas = _.$('._canvas');
const context = $canvas.getContext('2d');
renderPlate({ context, plateStuff });
//'Z'.charCodeAt().toString(16)
// String.fromCharCode(parseInt('5a',16))