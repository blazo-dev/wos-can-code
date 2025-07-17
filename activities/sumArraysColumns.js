/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const numbersA = [20, 10, 30, 40];
const numbersB = [10, 30, 20, 20];
const expected = [30, 40, 50, 60];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  const resultArray = [];
  for(let i = 0; i < nums1.length; i++) {
    resultArray.push(nums1[i] + nums2[i]);
  }
  
  return resultArray;
}


function sumArrColumnsMap(nums1, nums2) {  
  return nums1.map((value, idx)=> value + nums[idx]);
}


// Tests
const result = sumArrColumns(numbersA, numbersB);
console.log(result, 'should equal', expected);


const resultMap = sumArrColumnsMap(numbersA, numbersB);
console.log({resultMap}, 'should equal', {expected});






