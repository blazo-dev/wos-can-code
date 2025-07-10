// Print Numbers 5 to 50
// Write a function print5to50() that logs all numbers from 5 to 50.
function print5to50() {
    for (let i = 5; i <= 50; i++) {
        console.log(i);
    }
}
print5to50();
// Print All Even Numbers from 10 to 40
// Write a function printEvens10to40() that logs all even numbers between 10 and 40.
function printEvens10to40() {
    for (let i = 10; i <= 40; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
printEvens10to40();
// Print Multiples of 5 up to 100
// Write a function printMultiplesOf5() that logs all numbers from 5 to 100 that are divisible by 5.
function printMultiplesOf5() {
    for (let i = 10; i <= 40; i++) {
        if (i % 5 === 0) console.log(i);
    }
}
printMultiplesOf5();
// Print Numbers in Reverse
// Write a function printReverse20to1() that logs numbers from 20 down to 1.
function printReverse20to1() {
    for (let i = 20; i > 0; i--) {
        console.log(i);
    }
}
printReverse20to1();
// Sum All Numbers from 1 to 100
// Write a function sum1to100() that returns the total sum from 1 to 100.
function sum1to100() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum1to100());
// Create an Array from 10 to 30
// Write a function createArray10to30() that returns an array containing the numbers from 10 to 30.
function createArray10to30() {
    let arr = [];

    for (let i = 10; i <= 30; i++) {
        arr.push(i);
    }

    return arr;
}
console.log(createArray10to30());
// Print All Items in an Array
// Write a function printArrayItems(arr) that logs each item in the given array.
function printArrayItems(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
printArrayItems([1, 2, 3, 4, 5]);
// Count Positive Numbers
// Write a function countPositives(arr) that returns the number of elements in the array that are greater than zero.
function countPositives(arr) {
    let positiveCounter = 0;
    for (const item of arr) {
        if (item > 0) positiveCounter++;
    }
    return positiveCounter;
}
console.log(countPositives([-1, 2, 3, 4, -2]));

// Print Squares of Numbers 1 to 20
// Write a function printSquares1to20() that logs the square of each number from 1 to 20.
function printSquares1to20() {
    for (let i = 1; i <= 20; i++) {
        console.log(i * i);
    }
}
printSquares1to20();
// Calculate Average of an Array
// Write a function averageArray(arr) that returns the average (mean) value of all numbers in the given array.
/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function averageArray(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }

    return sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5]));
