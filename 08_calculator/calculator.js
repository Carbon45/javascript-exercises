const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  let totalSum = 0;

	for (let i = 0; i < numArr.length; i++) {
    totalSum += numArr[i];
  }

  return totalSum;
};

const multiply = function(numArr) {
  let totalSum = 1;

  for (let i = 0; i < numArr.length; i++) {
    totalSum *= numArr[i];
  }

  return totalSum;
};

const power = function(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(num) {

    let result = 1;

    for (let i = num; i >= 1; i--) {
      result *= i;
    }
  
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
