const palindromes = function (str) {
    // Remove all non-alphanumeric characters from string
    const cleanStr = str.replace(/[^0-9a-z]/gi, '');
  
    // Check if cleaned string is a palindrome
    const reversedStr = cleanStr.split('').reverse().join('');

    if (cleanStr.toLowerCase() === reversedStr.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
  };

// Do not edit below this line
module.exports = palindromes;
