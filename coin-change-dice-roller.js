// ! I COLLABORATED WITH ORLANDO HE MADE THE LOOP LOGIC FOR FIRST CHALLENGE

// 💰 Challenge 1: Coin Change
// Write a function makeChange(cents) that returns an object showing the fewest number of U.S. coins (quarters, dimes, nickels, and pennies) needed to make that amount.

// Example
// console.log(makeChange(94));
// Expected output:

// { quarters: 3, dimes: 1, nickels: 1, pennies: 4 }
// Tips
// Use Math.floor() to figure out how many of each coin fit
// Use the % (modulo) operator to find the leftover cents
// Return an object with four properties: quarters, dimes, nickels, pennies
// Starter Code
/**
 * @param {number[]} cents
 * @returns {Record<string, number>[]}
 */
function makeChange(cents) {
    const COINS_VALUE = {
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1,
    };

    const coinsResult = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    };

    for (const coin in COINS_VALUE) {
        coinsResult[coin] = Math.floor(cents / COINS_VALUE[coin]);
        cents = cents - COINS_VALUE[coin] * coinsResult[coin];
    }

    return coinsResult;
}

console.log(makeChange(95));
console.log(makeChange(93));
console.log(makeChange(92));
console.log(makeChange(91));

/**
 * 🎲 Challenge 2: Dice Roller
 * Write a function called rollDie() that returns a random number
 * between 1 and 6 — just like rolling a six-sided die.
 *
 * @param {number} sides default {6}
 * @returns {number}
 */
// Add a parameter sides to roll a 10- or 20-sided die ✅
function rollDie(sides = 6) {
    return Math.ceil(Math.random(1) * sides);
}

// Write a function that rolls two dice and returns their total
function rollTwice() {
    let firstAttemp = rollDie();
    let secondAttemp = rollDie();

    return firstAttemp + secondAttemp;
}

// Write a loop that keeps rolling until you get a 6, then returns the number of rolls it took
function rollUntilGet(expectedResult) {
    let numberOfRolls = 0;
    let rollResult;
    while (numberOfRolls != expectedResult) {
        rollResult = rollDie(expectedResult);
        numberOfRolls++;
    }

    return rollResult;
}

console.log(rollDie());
console.log(rollDie(10));
console.log({ "rollDice()": rollDie() });
console.log({ "rollDice(10)": rollDie(10) });
console.log({ "rollDice(20)": rollDie(20) });
console.log({ rollTwice: rollTwice() });
console.log({ "rollUntilGet(10)": rollUntilGet(10) });
