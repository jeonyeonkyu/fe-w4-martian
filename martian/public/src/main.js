import _ from './util.js';

const canvas = _.$('._canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = '#000';
ctx.arc(400, 400, 300, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();