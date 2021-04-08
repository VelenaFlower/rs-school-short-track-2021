/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    const strArr = arr.slice();
    strArr.splice(i, 1).map((x) => parseInt(x, 10));
    const num = (parseInt(strArr.join(''), 10));

    if (num > highest) {
      highest = num;
    }
  }

  return highest;
}

module.exports = deleteDigit;
