const plateStuff = {
  x: 400,
  y: 400,
  radius: 300,
  startAngle: Math.PI * 1.5,
  endAngle: Math.PI * 2,
  anticlockwise: false
}

const marsStyle = {
  fillColor: '#F77269',
  strokeColor: '#000',
  textColor: '#fff',
  textAlign: 'center',
  textBaseline: 'middle',
  font: '24pt Century Gothic Bold',
}

const addText = (context, category, midAngle) => {
  context.textAlign = marsStyle.textAlign;
  context.textBaseline = marsStyle.textBaseline;
  context.font = marsStyle.font;
  context.fillStyle = marsStyle.textColor;
  context.fillText(category, 400 + Math.cos(midAngle) * 260, 400 + Math.sin(midAngle) * 260);
}

const numberPlate = ({ context, Hexadecimal }) => {
  const { x, y, radius, startAngle, endAngle, anticlockwise } = plateStuff;
  let angle = startAngle;
  Hexadecimal.forEach(hex => {
    const nextAngle = angle + endAngle / Hexadecimal.length;
    context.beginPath();
    context.strokeStyle = marsStyle.strokeColor;
    context.fillStyle = marsStyle.fillColor;
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