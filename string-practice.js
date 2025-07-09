// Intro
// Today, you explored how strings behave like arrays, learned useful string methods, and practiced using template literals.
// Use the variables provided to complete each task.

// 1. Letter by Letter
let word = "supercalifragilisticexpialidocious";
// Use a loop to print each character of word on a new line.
console.log({ word });
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(letter);
}

// 2. Count the Letter A
let phrase =
    "During our amazing Alaska adventure, Aaliyah and I saw a vast array of captivating animals.";
// Write code to count how many times "a" or "A" appears in the string. Log the final count.
let aCounter = 0;
for (const charPosition in phrase) {
    if (phrase[charPosition].toLocaleLowerCase().includes("a")) aCounter++;
}
console.log({ aCounter });

// 3. Yell It!
let quietMessage = "look out behind you";
// Turn quietMessage into all uppercase and add an exclamation mark. Log the final result.
console.log(`${quietMessage.toUpperCase()}!`);

// 4. Check the Keyword "secret"
let sentence1 = "It was a secret that only a select few were privy to.";
let sentence2 = "The hidden compartment contained valuable documents.";
let sentence3 =
    "Secret operations were carried out under the cover of darkness.";
let sentence4 =
    "The old woman quietly mumbled, 'Those cretins will never find my hidden treasure.'";
// Write code that checks if each sentence contains the word "secret" (case insensitive).
// For each one, log either:
const sentences = [sentence1, sentence2, sentence3, sentence4]
for (const sentence of sentences) {
    if (sentence.includes("secret")) console.log("Keyword found!");
    else console.log("Keyword missing!");
}

// "Keyword found!"
// "Keyword missing."

// 5. Shorten a Tweet
let tweet1 = "Just enjoyed a fantastic coffee!";
let tweet2 = "Learning JavaScript is fun!";
let tweet3 =
    "The weather today is absolutely beautiful, perfect for a walk in the park.";
let tweet4 =
    "Excited to announce that our team has successfully launched the new project! It took a lot of hard work and dedication, and we're incredibly proud of what we've accomplished. More details coming soon, stay tuned for updates and behind-the-scenes content.";
// Write code for each tweet that:
// Logs the original tweet if it's 20 characters or less.
// If it's longer than 20 characters, log the first 17 characters plus "...".
const tweets = [tweet1, tweet2, tweet3, tweet4]

for (const tweet of tweets) {
    if (tweet.length <= 20) console.log(tweet);
    else console.log(`${tweet.slice(0, 17)}...`);
}
// 6. Sentence with Template Literal
let name = "Bryan Lazo";
let favoriteFood = "pupusas";
let numPets = 2;
// Use a template literal to log the following sentence:
// My name is YourName. I love tacos. I have 2 pets.
// Change the variables and test it with different values!
console.log(`My name is ${name}. I love ${favoriteFood}. I have ${numPets} pets.`);
