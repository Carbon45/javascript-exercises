const fibonacci = function(n) {
    if (n < 0) {
      return "OOPS";
    } else if (n === 0) {
      return 0;
    } else if (n === 1 || n === 2) {
      return 1;
    } else if (typeof n === "string") {
      n = parseInt(n);
    }
  
    let fibArr = [0, 1, 1];
  
    for (let i = 3; i <= n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  
    return fibArr[n];
  };
  
// Do not edit below this line
module.exports = fibonacci;
