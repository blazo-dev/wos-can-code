/*
  Rotate String
  Write a function that takes a string and a non-negative
  integer, and rotates the string’s characters to the right
  by the given amount. Characters shifted off the end wrap
  around to the front.
*/

const str = 'Hello World';

const rotateAmnt1 = 0;
const expected1 = 'Hello World';

const rotateAmnt2 = 1;
const expected2 = 'dHello Worl';

const rotateAmnt3 = 2;
const expected3 = 'ldHello Wor';

const rotateAmnt4 = 4;
const expected4 = 'orldHello W';

const rotateAmnt5 = 13;
const expected5 = 'ldHello Wor'; // length is 11
/*
  Explanation: 13 is 2 more than the string length (11), so it
  behaves the same as rotating by 2 characters—full rotations
  return the string to its original order.
*/

/**
 * Rotates the characters of a string to the right by the given amount.
 * Characters that move past the end wrap around to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to
 * rotate to the right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
  const rotationIndex = str.length - amnt
  return str.slice(rotationIndex, str.length) + str.slice(0, rotationIndex)
}

console.log(`${rotateStr(str, rotateAmnt1)} should equal ${expected1}`);
console.log(`${rotateStr(str, rotateAmnt2)} should equal ${expected2}`);
console.log(`${rotateStr(str, rotateAmnt3)} should equal ${expected3}`);
console.log(`${rotateStr(str, rotateAmnt4)} should equal ${expected4}`);
console.log(`${rotateStr(str, rotateAmnt5)} should equal ${expected5}`);

export { rotateStr };







