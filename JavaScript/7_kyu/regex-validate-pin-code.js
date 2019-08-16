// https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

const validatePIN = PIN => {
  const arrayPIN = Array.from(PIN);

  if (arrayPIN.length === 4 || arrayPIN.length === 6) {
    for (let i = 0; i < arrayPIN.length; i++) {
      if (arrayPIN[i] === "0") {
        continue;
      } else if (!Number(arrayPIN[i])) {
        return false;
      }
    }
    return true;
  } else return false;
};
