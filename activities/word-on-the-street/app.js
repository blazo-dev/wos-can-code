const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const secretWords = [
    "function",
    "variable",
    "loop",
    "array",
    "object",
    "callback",
    "promise",
    "class",
    "closure",
    "recursion",
];
const letters = "abcdefghijklmnopqrstuvwxyz";

function getSecretWord() {
    return secretWords[Math.floor(Math.random() * secretWords.length)];
}

function handleWordStatus(secretWord) {
    const statusWord = [];
    const wrongLetters = [""];
    let lives = 5;
    for (const _ of secretWord) {
        statusWord.push("_");
    }

    return function (character, isPlaying = true) {
        if (!isPlaying) return { statusWord, lives, wrongLetters };

        for (const key in secretWord) {
            if (secretWord[key] === character) statusWord[key] = character;
        }

        if (wrongLetters.includes(character)) {
            console.log(
                `🔁 The letter "${character.toUpperCase()}" has already been tried. Pick a new one!`
            );
        } else if (!secretWord.includes(character)) {
            lives--;
            wrongLetters.push(character);
        }

        return { statusWord, lives, wrongLetters };
    };
}

function askInput(message) {
    return rl.question(message);
}   

function validateInput(input) {
    return letters.includes(input) && input.length === 1;
}

async function runGame() {
    const secretWord = getSecretWord();
    const updateStatus = handleWordStatus(secretWord);
    const { statusWord, lives, wrongLetters } = updateStatus("", false);
    let continuePlaying = true;
    let userInput = "";

    console.clear();
    console.log("🟨🎮  Welcome to **Word on the Street**! 🎮🟨\n");
    console.log("🔤 Guess the secret programming word one letter at a time.");
    console.log("❌ You have 5 lives. Wrong guesses cost a life.\n");

    console.log(`🧠 Word: ${statusWord.join(" ").toUpperCase()}`);
    console.log(`❓ Wrong Letters: ${wrongLetters.join(" ").toUpperCase()}`);
    console.log(`❤️  Lives Remaining: ${lives}\n`);

    do {
        if (secretWord === statusWord.join("").toLowerCase()) {
            console.log("\n🎉 You won! Great job!");
            console.log(
                `✅ The secret word was: ${secretWord.toUpperCase()}\n`
            );
            await askInput("🔁 Press Enter to play again...");
            return runGame(); // restart
        }

        userInput = await askInput("👉 Enter your guess (or type 0 to exit): ");

        if (userInput === "0") {
            console.log("\n👋 Thanks for playing! See you next time.\n");
            break;
        }

        if (!validateInput(userInput.toLowerCase())) {
            console.log(
                "⚠️  Invalid input. Please enter a single letter (a-z).\n"
            );
            continue;
        }

        const { lives, wrongLetters } = updateStatus(userInput.toLowerCase());

        if (lives === 0) {
            console.log("\n💀 You've run out of lives!");
            console.log(`🔒 The word was: ${secretWord.toUpperCase()}`);
            console.log("👋 Thanks for playing!\n");
            await askInput("🔁 Press Enter to play again...");
            return runGame(); // restart
        }

        console.log(`\n🧠 Word: ${statusWord.join(" ").toUpperCase()}`);
        console.log(
            `❓ Wrong Letters: ${wrongLetters.join(" ").toUpperCase()}`
        );
        console.log(`❤️  Lives Remaining: ${lives}\n`);
    } while (continuePlaying);

    rl.close();
}

runGame();
