// using set to avoid duplicates
let phoneNumbers = new Set();

/**
 * @desc generates random number
 */
const generatePhoneNumber = () => {
  return Math.floor(100000000 + Math.random() * 900000000);
};

/**
 * @desc populates the set with numbers
 * @param {number} setLength
 */
const createNumberSet = setLength => {
  if (typeof setLength !== "number" || !setLength || setLength <= 0) {
    return "Array length must start from 1";
  } else {
    for (let i = 1; i <= setLength; i++) {
      const phoneNum = "0" + generatePhoneNumber();
      if (phoneNum.length !== 10) {
        continue;
      } else {
        phoneNumbers.add(phoneNum);
      }
    }
    return phoneNumbers;
  }
};

module.exports = createNumberSet;
