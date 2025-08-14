import { merge } from "./merge.mjs";

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {number[]} numbers
 * @returns {number[]} A new sorted array.
 */
function mergeSort(numbers) {
    if (numbers.length <= 1) return numbers;

    const mid = Math.floor(numbers.length / 2);

    const left = mergeSort(numbers.slice(0, mid));
    const right = mergeSort(numbers.slice(mid));

    return merge(left, right);
}

// Tests:
console.table({
    numbersOrdered,
    numbersOrderedResult: mergeSort(numbersOrdered),
    expectedSort,
});
console.table({
    numbersRandomOrder,
    numbersRandomOrderResult: mergeSort(numbersRandomOrder),
    expectedSort,
});
console.table({
    numbersReversed,
    numbersReversedResult: mergeSort(numbersReversed),
    expectedSort,
});
