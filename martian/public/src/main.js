import _ from './util.js';
import renderPlate from './renderPlate.js';
import runTransceiver from './transceiver.js';
import {
  receiveButtonClickHandler, sendInputHandler,
  sendButtonClickHandler, earthSendButtonClickHandler
} from './eventHandler.js';


const elements = {
  $canvas: _.$('._canvas'),
  $receiveInput: _.$('._receive_input'),
  $receiveButton: _.$('._receive_button'),
  $receiveInterpreting: _.$('._receive_interpreting'),
  $sendInput: _.$('._send_input'),
  $sendButton: _.$('._send_button'),
  $sendInterpreting: _.$('._send_interpreting'),
  $appointed: _.$All('.appointed > div'),
  $mars: _.$('.mars'),
  $arrow: _.$('.arrow'),
  $message: _.$('._message'),
  $earthReceiveInput: _.$('._earth_receive_input'),
  $earthSendInput: _.$('._earth_send_input'),
  $earthSendButton: _.$('._earth_send_button')
}

const context = elements.$canvas.getContext('2d');
renderPlate(context);

elements.$receiveButton.addEventListener('click', () => receiveButtonClickHandler(elements));
elements.$sendInput.addEventListener('input', (event) => sendInputHandler(event, elements));
elements.$sendButton.addEventListener('click', () => sendButtonClickHandler(elements));
elements.$earthSendButton.addEventListener('click', () => earthSendButtonClickHandler(elements));

const observer = new MutationObserver((mutations) => {
  const communicator = mutations[0].attributeName === 'data-from-mars' ? 'fromMars' : 'fromEarth';
  runTransceiver(elements, communicator);
});

const config = { attributes: true };

observer.observe(elements.$message, config);