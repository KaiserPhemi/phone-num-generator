const createNumberSet = require("./randGenerator");

const sortAscending = (firstElement, nextElement) => {
  return firstElement - nextElement;
};

const sortDescending = (firstElement, nextElement) => {
  return nextElement - firstElement;
};

const sortPhoneNumber = numberArray => {
  return numberArray.sort(compareInput2);
};
