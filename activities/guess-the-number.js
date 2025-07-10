import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Instructions
// Write a JavaScript program that lets the user guess a number between 1 and 100. The script should:

// Generate a random number between 1 and 100
// Prompt the user to guess the number using readline
// If their guess is too high, respond: "Too high, try again."
// If their guess is too low, respond: "Too low, try again."
// If their guess is correct, respond: "Congratulations! You guessed the number correctly."
// Keep looping until the correct number is guessed
const rl = readline.createInterface({ input, output });

/**
 *
 * @param {string} message
 * @returns {string}
 */
function askInput(message) {
    return rl.question(message);
}

async function guessNumber() {
    const secretNumber = Math.ceil(Math.random() * 100);

    let userGuess = 0;

    console.log(`Guess the number! 1 to 100`);
    do {
        if (Number.isNaN(userGuess)) {
            console.log("you guess must be a number");
        }

        if (userGuess > secretNumber) console.log("Too high, try again!");
        else if (userGuess < secretNumber) console.log("Too low, try again!");
    } while (userGuess !== secretNumber);

    console.log(
        `Congratulations! You guessed the number correctly! Your guess: ${userGuess}`
    );

    rl.close();
}

guessNumber();
