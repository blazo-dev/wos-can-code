// Double If Even
// doubleIfEven(arr): Doubles every even number in the array, in-place.
// ✳️ Modify the original array and return it.
function doubleIfEven(arr) {
    for (const index in arr) {
        if (arr[index] % 2 === 0) arr[index] *= 2;
    }
    return arr;
}
console.log(doubleIfEven([1, 2, 3, 4, 5]));

// Replace Negatives with Zero
// zeroNegatives(arr): Replaces all negative values in the array with 0.
// ✳️ Modify the original array and return it.
function zeroNegatives(arr) {
    for (const index in arr) {
        if (arr[index] < 0) arr[index] = 0;
    }
    return arr;
}
console.log(zeroNegatives([-11, 2, -3, 4, 5]));
// Count Below Threshold
// countBelowThreshold(arr, threshold): Returns the number of values in the array that are less than the threshold.
function countBelowThreshold(arr, threshold) {
    let count = 0;
    for (const value of arr) {
        if (value < threshold) count++;
    }
    return count;
}
console.log(countBelowThreshold([1, 2, 3, 4, 5], 3));

// Swap First and Last
// swapFirstAndLast(arr): Swaps the first and last elements of the array.
// ✳️ Modify the original array and return it.
function swapFirstAndLast(arr = []) {
    let temp = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}

console.log(swapFirstAndLast([1, 2, 3, 4, 5]));

// Sum of All Evens
// sumEvens(arr): Returns the sum of all even numbers in the array.
function sumEvens(arr) {
    let sum = 0;
    for (const value of arr) {
        if (value % 2 === 0) sum += value;
    }
    return sum;
}
console.log(sumEvens([1, 2, 3, 4, 5]));

// Print Index and Value
// printIndexAndValue(arr): Logs each index and the corresponding value in the array.
function printIndexAndValue(arr) {
    for (const [index, value] of arr.entries()) {
        console.log(`Index: ${index}, Value: ${value}`);
    }
}
printIndexAndValue([1, 2, 3, 4, 5]);

// Get Max
// getMax(arr): Returns the largest number in the array.
function getMax(arr) {
    let max = arr[0];
    for (const value of arr) {
        if (value > max) max = value;
    }
    return max;
}
console.log(getMax([1, 2, 3, 4, 5]));

// Count the Odds
// countOdds(arr): Returns the number of odd numbers in the array.
function countOdds(arr) {
    let count = 0;
    for (const value of arr) {
        if (value % 2 !== 0) count++;
    }
    return count;
}
console.log(countOdds([1, 2, 3, 4, 5]));

// All Positive?
// allPositive(arr): Returns true if all numbers are positive; otherwise, false.
function allPositive(arr) {
    for (const value of arr) {
        if (value <= 0) return false;
    }
    return true;
}
console.log(allPositive([1, 2, 3, 4, 5]));
console.log(allPositive([1, 2, 3, -4, 5]));

// Multiply by Index
// multiplyByIndex(arr): Multiplies each number by its index.
// ✳️ Modify the original array and return it.
function multiplyByIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= i;
    }
    return arr;
}
console.log(multiplyByIndex([1, 2, 3, 4, 5]));
