import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function runGame() {
    const options = {
        1: "Rock",
        2: "Paper",
        3: "Scissors",
    };

    console.log("Welcome to Rock-Paper-Scissors!");
    printOptions(options);
    const userChoice = await askInput("Enter the number of your choice: ");
    const botChoice = getBotChoice();

    console.log({ userChoice, botChoice });

    rl.close();
}

/**
 * @param {string} message
 * @returns {Promise<string>}
 */
function askInput(message) {
    return rl.question(message);
}

/**
 * @param {Record<number, string>} options
 */
function printOptions(options) {
    for (const optionKey in options) {
        console.log(`${optionKey}: ${options[optionKey]}`);
    }
}

/**
 *
 * @param {number} maxOptions
 * @returns {number}
 */
function getBotChoice(maxOptions = 3) {
    return Math.ceil(Math.random() * maxOptions);
}

function getWinner(userChoice, botChoice, options) {
    
}

runGame();
