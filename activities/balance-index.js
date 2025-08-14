const nums1 = [1, 1, 2];
const expected1 = -1;

const nums2 = [1, 1, 2, 4];
const expected2 = -1;

const nums3 = [-2, 5, 7, 0, 3];
const expected3 = 2;

const nums4 = [];
const expected4 = -1;

const nums5 = [10];
const expected5 = -1;

const nums6 = [1, 2];
const expected6 = -1;

const nums7 = [1, 2, 3, 2, 1];
const expected7 = 2;

const nums8 = [-2, 5, 7, 0, 3];
const expected8 = 2;

const nums9 = [1, 1, 1, 1, 4];
const expected9 = 4;

const nums10 = [2, 1, 1, 2];
const expected10 = -1;

const nums11 = [0, 1000000, 0];
const expected11 = 1;

const nums12 = [0, 0, 0, 0];
const expected12 = 0;


function balanceIndex(nums) {
  if (nums.length <= 2) return -1;

  const sumValues = (values) =>
    values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  let leftSide = 0;
  let rightSide = sumValues(nums);
  for (let i = 0; i < nums.length; i++) {
    rightSide -= nums[i];
    if (leftSide === rightSide) return i;
    leftSide += nums[i];
  }

  return -1;
}


console.log({nums1, balanceIndex: balanceIndex(nums1), expected1 })
console.log({nums2, balanceIndex: balanceIndex(nums2), expected2 })
console.log({nums3, balanceIndex: balanceIndex(nums3), expected3 })
console.log({nums4, balanceIndex: balanceIndex(nums4), expected4})
console.log({nums5, balanceIndex: balanceIndex(nums5), expected5})
console.log({nums6, balanceIndex: balanceIndex(nums6), expected6})
console.log({nums7, balanceIndex: balanceIndex(nums7), expected7})
console.log({nums8, balanceIndex: balanceIndex(nums8), expected8})
console.log({nums9, balanceIndex: balanceIndex(nums9), expected9})
console.log({nums10, balanceIndex: balanceIndex(nums10), expected10})
console.log({nums11, balanceIndex: balanceIndex(nums11), expected11})
console.log({nums12, balanceIndex: balanceIndex(nums12), expected12})

