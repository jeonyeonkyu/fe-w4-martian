const convertStringToHex = (string) => {
  return string.charCodeAt().toString(16);
}

const convertHexToString = (hex) => {
  return String.fromCharCode(parseInt(hex, 16));
}

export { convertStringToHex, convertHexToString };