import transformColorPointOfView from './colorChange.js';
import hexadecimal from './hexadecimal.js';

const returningToOriginalState = ({ $mars, $arrow, $receiveButton, $receiveInput }, timerKinds) => {
  setTimeout(() => {
    transformColorPointOfView($mars, 2000);
    $arrow.style.transform = 'rotate(-78.75deg)';
    $receiveButton.disabled = !$receiveInput.value;
  }, 7000);
  clearInterval(timerKinds);
}

const checkClockWise = (distance) => {
  return distance >= 8 || (distance <= 0 && distance >= -8);
}

const getStep = (distance) => {
  return Math.abs(distance) > 8 ? 16 - Math.abs(distance) : Math.abs(distance);
}

const rotateArrowImage = ({ $arrow }, step, way) => {
  const size = 360 / hexadecimal.length;
  const prevAngle = Number($arrow.style.transform.slice(7).slice(0, -4));
  $arrow.style.transform = way ? `rotate(${prevAngle + step * size}deg)`
    : `rotate(${prevAngle - step * size}deg)`;
}

const runTransceiver = (elements, communicator) => {
  const messageArray = elements.$message.dataset[communicator].split(' ');
  let prevIndex = 0;
  const input = communicator === 'fromMars' ? elements.$earthReceiveInput : elements.$receiveInput;
  transformColorPointOfView(elements.$mars, 5000);

  const allMessageTimer = setInterval(() => {
    const currentMessage = messageArray.shift().split('');

    const currentMessageTimer = setInterval(() => {
      const currentIndex = hexadecimal.indexOf(currentMessage.shift().toUpperCase());
      transformColorPointOfView(elements.$appointed[currentIndex], 2000);
      const distance = prevIndex - currentIndex;
      const way = checkClockWise(distance);
      const step = getStep(distance);
      rotateArrowImage(elements, step, way);
      prevIndex = currentIndex;
      input.value += hexadecimal[currentIndex];
      if (!currentMessage[0]) clearInterval(currentMessageTimer);
    }, 2000);

    input.value += input.value === '' ? '' : ' ';
    if (!messageArray[0]) returningToOriginalState(elements, allMessageTimer);
  }, 5000);
}

export default runTransceiver;