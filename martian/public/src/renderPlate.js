import _ from './util.js';

const plateStuff = {
  x: 400,
  y: 400,
  radius: 300,
  startAngle: Math.PI * 1.5,
  endAngle: Math.PI * 2,
  anticlockwise: false
}

const addText = (context, category, midAngle) => {
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "24pt Century Gothic Bold";
  context.fillStyle = "#fff";
  context.fillText(category, 400 + Math.cos(midAngle) * 260, 400 + Math.sin(midAngle) * 260);
}

const numberPlate = ({ context, Hexadecimal }) => {
  const { x, y, radius, startAngle, endAngle, anticlockwise } = plateStuff;
  let angle = startAngle;
  Hexadecimal.forEach(hex => {
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

const arrowPlate = ({ context }) => {
  const { x, y, radius, endAngle, anticlockwise } = plateStuff;
  context.beginPath();
  context.arc(x, y, radius / 3, 0, endAngle, anticlockwise);
  context.fill();
  context.stroke();
  context.closePath();
}

const renderPlate = ({ context, Hexadecimal }) => {
  numberPlate({ context, Hexadecimal });
  arrowPlate({ context });
}

export default renderPlate;