import { convertStringToHex, convertHexToString } from './convert.js';

const receiveButtonClickHandler = ({ $receiveInput, $receiveInterpreting, $receiveButton }) => {
  const convertString = $receiveInput.value.split(' ')
    .map(e => convertHexToString(e)).join('');
  $receiveInterpreting.innerText = convertString;
  $receiveInput.value = '';
  $receiveButton.disabled = 'disabled';
}

const sendInputHandler = ({ target: { value } }, { $sendInterpreting }) => {
  const convertNumber = value.split('')
    .map(e => convertStringToHex(e))
    .join(' ');
  $sendInterpreting.innerText = convertNumber;
}

const sendButtonClickHandler = ({ $message, $sendInterpreting, $sendInput }) => {
  $message.dataset.fromMars = $sendInterpreting.innerText;
  $sendInput.value = '';
  $sendInterpreting.innerText = '';
}

const earthSendButtonClickHandler = ({ $message, $earthSendInput }) => {
  $message.dataset.fromEarth = $earthSendInput.value;
  $earthSendInput.value = '';
}

export { receiveButtonClickHandler, sendInputHandler, sendButtonClickHandler, earthSendButtonClickHandler };