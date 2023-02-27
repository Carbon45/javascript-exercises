const removeFromArray = function(arr, ...removedItems) {
    return arr.filter(item => !removedItems.includes(item)); 
  };

// Do not edit below this line
module.exports = removeFromArray;
