const palindromes = function (string) {
  let revArr;
  string = string
    .split(" ")
    .join("")
    .replace(/[^\w\s]/gi, "")
    .toLowerCase();
  revArr = string.split("").reverse().join("");
  if (string === revArr) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
