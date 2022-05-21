function reverseString(string) {
  let stringLength = string.length;
  let stringArray = string.split("");
  let stringReverse = "";
  for (let i = stringLength - 1; i >= 0; i--) {
    stringReverse += stringArray[i];
  }
  return stringReverse;
}

export default reverseString;
