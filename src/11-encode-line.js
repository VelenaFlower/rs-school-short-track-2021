/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const replacer = (match, char) => match.length + char;

  const regex = /([a-z])\1+/gi;
  return str.replace(regex, replacer);
}

module.exports = encodeLine;
