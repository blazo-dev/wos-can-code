const stringToRepeat1 = "Tacos";
const numberToRepeat1 = 5;
const repeatedExpected1 = "TacosTacosTacosTacosTacos";

const stringToRepeat2 = "margherita pizza";
const numberToRepeat2 = 2;
const repeatedExpected2 = "margherita pizzamargherita pizza";

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 *
 * @param {string} str
 * @param {number} num
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str, num) {
    let temp = "";
    for (let i = 0; i < num; i++) {
        temp += str;
    }

    return temp;
}

console.log(stringRepeat(stringToRepeat1, numberToRepeat1));
console.log(stringRepeat(stringToRepeat2, numberToRepeat2));
