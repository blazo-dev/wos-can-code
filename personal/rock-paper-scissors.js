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

    printWinner(options[userChoice], options[botChoice], options);

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

/**
 *
 * @param {string} uChoice
 * @param {string} bChoice
 * @param {Record<number, string>} opts
 */
function printWinner(uChoice, bChoice, opts) {
    const userWon =
        (uChoice === "Paper" && bChoice === "Rock") ||
        (uChoice === "Scissors" && bChoice === "Paper") ||
        (uChoice === "Rock" && bChoice === "Scissors");

    if (!Object.values(opts).includes(uChoice)) {
        console.log("Sorry, we don't have that option...");
        return;
    } else if (uChoice === bChoice) console.log("It's a tie! Try again!");
    else if (userWon) console.log("You win!");
    else console.log("You lost. Whomp whomp. :(");
    console.log(`Your choice: ${uChoice}\nBot choice: ${bChoice}`);
}

runGame();
