const caesarCipher = (string) => {
  let codeArr = convertToCharCode(string);
  return shiftCharCode(codeArr)
    .map((code) => {
      let str = String.fromCharCode(code);
      return str;
    })
    .join("");
};

const convertToCharCode = (string) => {
  let codeArr = [];
  for (let i = 0; i < string.length; i++) {
    codeArr.push(string.charCodeAt(i));
  }
  return codeArr;
};

const shiftCharCode = (arr) => {
  return arr.map((code) => {
    if (code >= 65 && code <= 89) {
      code++;
      return code;
    } else if (code === 90) {
      return 65;
    } else if (code >= 97 && code <= 121) {
      code++;
      return code;
    } else if (code === 122) {
      return 97;
    } else {
      return code;
    }
  });
};

export default caesarCipher;
