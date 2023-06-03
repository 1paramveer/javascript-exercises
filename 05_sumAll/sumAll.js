const sumAll = function (startNum, endNum) {
  let result = 0;
  if (startNum < 0 || endNum < 0) {
    return "ERROR";
  }
  if (typeof startNum != "number" || typeof endNum != "number") {
    return "ERROR";
  }
  if (startNum > endNum) {
    const temp = startNum;
    startNum = endNum;
    endNum = temp;
  }
  for (let i = startNum; i <= endNum; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
