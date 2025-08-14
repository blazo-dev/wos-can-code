/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the
  array contains that value.

  Do not iterate the array sequentially. Instead, use a
  divide-and-conquer strategy that takes advantage of the
  array's sorted order.

  Bonus (interview-style): First complete the standard
  version. If time permits, add a feature that returns
  how many times the given number appears.
*/

const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNumber3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;

/**
 * Efficiently determines whether the given number exists
 * in the sorted array using binary search.
 * - Time: O(log n).
 * - Space: O(1).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the number exists in the array.
 */
function binarySearch(sortedNumbers, searchNum) {
  let lowest = 0;
  let highest = sortedNumbers.length - 1;
  let searchCounter = 0;

  while (lowest <= highest) {
    const mid = Math.floor((highest + lowest) / 2);

    if (sortedNumbers[mid] === searchNum) {
      const leftside = sortedNumbers.slice(lowest, mid + 1);
      const rightside = sortedNumbers.slice(mid + 1, highest);

      for (const leftNum of leftside) {
        if(leftNum === searchNum) searchCounter++
      }
      
      for (const rightNum of rightside) {
        if(rightNum === searchNum) searchCounter++
      }
      
      return searchCounter
    } else if (sortedNumbers[mid] > searchNum) highest = mid - 1;
    else lowest = mid + 1;
  }

  return searchCounter;
}

// console.log({
//   numbers1,
//   searchNumber1,
//   binarySearch: binarySearch(numbers1, searchNumber1),
//   expected1,
// });

// console.log({
//   numbers2,
//   searchNumber2,
//   binarySearch: binarySearch(numbers2, searchNumber2),
//   expected2,
// });

// console.log({
//   numbers3,
//   searchNumber3,
//   binarySearch: binarySearch(numbers3, searchNumber3),
//   expected3,
// });

console.log({
  numbers4,
  searchNumber4,
  binarySearch: binarySearch(numbers4, searchNumber4),
  expected4,
});
