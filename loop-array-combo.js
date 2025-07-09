// Practice Exercises
// 1. Print Each Item
let colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// Print each color in the array.

// 2. Print Each Item with Its Index
// Expected output:
for (const colorKey in colors) {
  console.log(`${colorKey}: ${colors[colorKey]}`);
}

// 3. Count the Number of Even Numbers
let numbers = [2, 7, 4, 9, 12, 5];
// Print how many numbers are even.

let evensCount = 0;
for (const number of numbers) {
  if (number % 2 === 0) evensCount++;
}
console.log({ evensCount });

// 4. Find the Total Sum
let points = [10, 15, 20, 5];
// Add them up and print the total.
let totalPoints = 0;
for (const item of points) {
  totalPoints += item;
}
console.log({ totalPoints });

// 5. Print Only the Vowels
let letters = ["a", "b", "c", "e", "o", "x"];
// Print only the vowels.
// Hint: Use a string like "aeiou" and check if it includes the letter.
let vowels = "aeiou";
for (const letter of letters) {
  if (vowels.includes(letter)) console.log({ vowel: letter });
}

// 6. Find the Longest Word
let words = ["apple", "banana", "cherry", "date"];
// Print the longest word in the array.
// Hint: Track the longest word you've seen so far in a variable.
let longestWord = "";
for (const word of words) {
  if (word.length > longestWord.length) longestWord = word;
}
console.log({ longestWord });

// 7. Reverse the Drawer
// Print each item from last to first.
// Stretch: Do it using a regular for loop (not reverse()).
for (let i = words.length - 1; i >= 0; i--) {
  console.log({ word: words[i] });
}

// 8. Print Items Longer Than 3 Letters
let pets = ["cat", "dog", "parrot", "fish"];
// Only print the ones with more than 3 letters.
for (const pet of pets) {
  if (pet.length > 3) console.log({ pet });
}
