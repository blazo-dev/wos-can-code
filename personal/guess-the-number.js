const readline = require("readline");

// Instructions
// Write a JavaScript program that lets the user guess a number between 1 and 100. The script should:

// Generate a random number between 1 and 100
// Prompt the user to guess the number using readline
// If their guess is too high, respond: "Too high, try again."
// If their guess is too low, respond: "Too low, try again."
// If their guess is correct, respond: "Congratulations! You guessed the number correctly."
// Keep looping until the correct number is guessed
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Guess the number!");
rl.question("Enter your guess: ", (answer) => {
    console.log(`You guessed ${answer}`);

    rl.close();
});


function guessNumber() {}
