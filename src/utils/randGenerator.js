/**
 * @desc generates random number
 */
const generatePhoneNumber = () => {
  const PHONE_NUM_DIGITS = 9;
  const ADDED_DIGIT = 1;
  const maxDigit = Math.pow(10, PHONE_NUM_DIGITS + ADDED_DIGIT);
  const minDigit = Math.pow(10, PHONE_NUM_DIGITS);
  const phoneNumber =
    Math.floor(Math.random() * (maxDigit - minDigit + 1)) + minDigit;

  return Number(("" + phoneNumber).substring(ADDED_DIGIT));
};

/**
 * @desc populates the set with numbers
 * @param {number} setLength
 */
const createNumberSet = setLength => {
  let phoneNumbers = new Set();
  if (typeof setLength !== "number" || !setLength || setLength <= 0) {
    return "Array length must start from 1";
  } else {
    for (let i = 1; i <= setLength; i++) {
      const phoneNum = generatePhoneNumber();
      if (("" + phoneNum).length === 9) {
        phoneNumbers.add(phoneNum);
      } else {
        console.log("missed", phoneNum);
        continue;
      }
    }
    return phoneNumbers;
  }
};

export default createNumberSet;
