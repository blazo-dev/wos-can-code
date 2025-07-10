// The Assessment
// Print in Reverse: 40 to 10
// Create a function printReverse40to10() that prints the numbers from 40 down to 10.
console.log("printReverse40to10 execution start.");
function printReverse40to10() {
    for (let i = 40; i >= 10; i--) {
        console.log(i);
    }
}
printReverse40to10();
console.log("printReverse40to10 execution end.");

// Print All Odd Numbers 1–21
// Create a function printOdds1to21() that prints every odd number between 1 and 21 (inclusive).
console.log("printOdds1to21 execution start.");
function printOdds1to21() {
    for (let i = 1; i <= 21; i++) {
        if (i % 2 !== 0) console.log(i);
    }
}
printOdds1to21();
console.log("printOdds1to21 execution end.");

// Sum of Numbers 50–100
// Create a function sum50to100() that returns the sum of all numbers from 50 to 100 (inclusive).
function sum50to100() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log({ sum50to100: sum50to100() });

// Create Array from 5 to 15
// Create a function makeArray5to15() that returns a new array containing the numbers 5 through 15.
function makeArray5to15() {
    const arr = [];

    for (let i = 0; i <= 10; i++) {
        arr[i] = i + 5;
    }

    return arr;
}

console.log({ makeArray5to15: makeArray5to15() });

// Print All Items in This Array
// Create a function printItems(arr) that prints each item in a given array.
console.log("printItems(arr) start");
function printItems(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

printItems([1, 2, 3, 4, 5, 6]);

console.log("printItems(arr) end");

// Print Index + Value for Each Item
// Create a function printIndexAndValue(arr) that prints the index and value for each item in a given array.
// Example output:
// Index 0: dog
// Index 1: cat
// Index 2: snake
console.log("printIndexAndValue(arr) start");
function printIndexAndValue(arr) {
    for (const index in arr) {
        console.log(`Index ${index}: ${arr[index]}`);
    }
}

printIndexAndValue(["dog", "cat", "snake"]);
console.log("printIndexAndValue(arr) end");

// Count All Vowels in a String
// Create a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the given string. Count both uppercase and lowercase vowels.

/**
 *
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
    const VOWELS = "aeiou";
    let vowelsCount = 0;

    for (const char of str) {
        if (VOWELS.includes(char.toLowerCase())) vowelsCount++;
    }

    return vowelsCount;
}

console.log({ countVowels: countVowels("aeiouAEIOU") });

// Triple All Even Numbers
// Create a function tripleEvens(arr) that modifies each even number in the array by tripling its value. Return the modified array.
// Note: Perform the modification(s) in-place. Do not create a new array.

function tripleEvens(arr) {
    for (const index in arr) {
        arr[index] *= 3;
    }

    return arr;
}
console.log({ tripleEvens: tripleEvens([1, 2, 3]) });

// Set All Negatives to 1
// Create a function setAllNegativesTo1(arr) that modifies each negative value in a given array to 1. Return the modified array.
// Note: Perform the modification(s) in-place. Do not create a new array.

function setAllNegativesTo1(arr) {
    for (const index in arr) {
        if (arr[index] < 0) arr[index] = 1;
    }

    return arr;
}
console.log({ setAllNegativesTo1: setAllNegativesTo1([1, 2, 3, -1, -2]) });

// Count Items Greater Than a Target
// Create a function countGreaterThan(arr, target) that returns how many values in the array are greater than the target number.
/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number}
 */
function countGreaterThan(numbers, target) {
    let greaterCount = 0;

    for (const num of numbers) {
        if (num > target) greaterCount++;
    }

    return greaterCount;
}
console.log({ countGreaterThan: countGreaterThan([1, 2, 3, -1, -2], 1) });

// Find the Smallest Value in an Array
// Create a function findMin(arr) that returns the smallest number in a given array.
/**
 *
 * @param {number[]} numbers
 * @returns {number}
 */
function findMin(numbers) {
    let smallestNumber = numbers[0];

    for (const num of numbers) {
        if (num < smallestNumber) smallestNumber = num;
    }

    return smallestNumber;
}
console.log({ findMin: findMin([1, 2, 3]) });

// Double the Value of All Odd Indexes
// Create a function doubleOddIndexes(arr) that doubles the value at every odd index of the array.
// Note: Perform the modification(s) in-place. Return the modified array.

function doubleOddIndexes(arr) {
    for (const index in arr) {
        if (index % 2 !== 0) arr[index] *= 2;
    }

    return arr;
}
console.log({ doubleOddIndexes: doubleOddIndexes([1, 2, 3, 4, 5, 6]) });

// Print All Even Indexed Items
// Create a function printEvenIndexedItems(arr) that prints the items at even-numbered indexes only.
console.log("printEvenIndexedItems(arr) end");
function printEvenIndexedItems(arr) {
    for (const index in arr) {
        if (index % 2 === 0) console.log(arr[index]);
    }
}
printEvenIndexedItems([1, 2, 3, 4, 5, 6]);
console.log("printEvenIndexedItems(arr) end");

// Check If All Values Are Positive
// Create a function allPositive(arr) that returns true if all numbers in the array are greater than zero. Otherwise, return false.
function allPositive(numbers) {
    for (const num of numbers) {
        if (num < 0) return false;
    }

    return true;
}
console.log({ allPositive: allPositive([1, 2, 3, -1]) });
console.log({ allPositive: allPositive([1, 2, 3, 1]) });

// Find How Many Times a Value Appears
// Create a function countOccurrences(arr, target) that returns how many times the target value appears in the array.

function countOccurrences(numbers, target) {
    let counter = 0;

    for (const num of numbers) {
        if (num === target) counter++;
    }

    return counter;
}
console.log({ countOccurrences: countOccurrences([1, 2, 3, 5, 4, 5], 5) });
