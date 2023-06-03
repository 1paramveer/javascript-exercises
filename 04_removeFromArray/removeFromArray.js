const removeFromArray = function (array, ...elements) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!elements.includes(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
