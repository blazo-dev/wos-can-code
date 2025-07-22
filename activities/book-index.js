/*
Book Index

Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const numsA = [1, 13, 14, 15, 37, 38, 70];
const expectedA = "1, 13-15, 37-38, 70";

const numsB = [5, 6, 7, 8, 9];
const expectedB = "5-9";

const numsC = [1, 2, 3, 7, 9, 15, 16, 17];
const expectedC = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    let result = "";
    let firstConsecutive = nums[0];
    let lastConsecutive = nums[0];
    let isConsecutive = false;

    for (let i = 0; i < nums.length; i++) {
        const nextElement = nums[i + 1];
        if (lastConsecutive + 1 === nextElement) {
            lastConsecutive = nextElement;
            isConsecutive = true;
        } else {
            isConsecutive
                ? (result += `${firstConsecutive}-${lastConsecutive}`)
                : (result += `${nums[i]}`);

            if (nextElement) result += ", ";

            firstConsecutive = nextElement;
            lastConsecutive = nextElement;
            isConsecutive = false;
        }
    }

    return result;
}

console.table({ numsA, resultA: bookIndex(numsA), expectedA });
// console.log({ numsB, resultB: bookIndex(numsB), expectedB });
// console.log({ numsC, resultC: bookIndex(numsC), expectedC });
