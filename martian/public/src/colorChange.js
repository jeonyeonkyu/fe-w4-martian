const addBlinkColor = ($element) => {
  $element.classList.add('blinking');
}

const removeBlinkColor = ($element) => {
  $element.classList.remove('blinking');
}

const transformColorPointOfView = ($element, time) => {
  addBlinkColor($element);
  setTimeout(() => removeBlinkColor($element), time);
}

export default transformColorPointOfView;