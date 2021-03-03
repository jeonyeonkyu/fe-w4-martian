import _ from './util.js';
import renderPlate from './renderPlate.js';

const Hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const $canvas = _.$('._canvas');
const context = $canvas.getContext('2d');
renderPlate({ context, Hexadecimal });


const convertStringToHex = (string) => {
  return string.charCodeAt().toString(16);
}

const convertHexToString = (hex) => {
  return String.fromCharCode(parseInt(hex, 16));
}

const convertFromMessage = (massage) => {

}


const $receiveInput = _.$('._receive_input');
const $receiveButton = _.$('._receive_button');
const $receiveInterpreting = _.$('._receive_interpreting');

$receiveButton.addEventListener('click', () => {
  const convertString = $receiveInput.value.split(' ')
    .map(e => convertHexToString(e)).join('');
  $receiveInterpreting.innerText = convertString;
});


const $sendInput = _.$('._send_input');
const $sendButton = _.$('._send_button');
const $sendInterpreting = _.$('._send_interpreting');

$sendInput.addEventListener('input', ({ target: { value } }) => {
  const convertNumber = value.split('')
    .map(e => convertStringToHex(e))
    .join(' ');
  $sendInterpreting.innerText = convertNumber;
});


const message = _.$('._message');
const messageArray = message.innerText.split(' ');
const currentMessage = messageArray.shift();
let prevIndex = 0;
const currentIndex = Hexadecimal.indexOf(currentMessage[0].toUpperCase());
const distance = prevIndex - currentIndex;
const way = distance <= 8 || distance >= -8;
const step = Math.abs(distance) > 8 ? 16 - Math.abs(distance) : Math.abs(distance);

const prevAngle = _.$('.arrow').style.transform.slice(7).slice(0, -4);
if (way) {
  _.$('.arrow').style.transform = `rotate(${Number(prevAngle) + step * 22.5}deg)`;
} else {
  _.$('.arrow').style.transform = `rotate(${Number(prevAngle) - step * 22.5}deg)`;
}
//구현중..

//11.25
//22.5
//68 65 6c 6c 6f 20 65 61 72 74 68 21