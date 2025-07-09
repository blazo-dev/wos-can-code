// 1. What's the Type?
// Declare variables of various types and log their types using typeof.

let playerName = "Steve"; // string
let zombieCount = 813; // number
let canMineObsidian = true; // boolean
let diamondSword; // undefined
let netherPortalStatus = null; // null (intentional absence of value)

console.log("Type of playerName:", typeof playerName);
console.log("Type of zombieCount:", typeof zombieCount);
console.log("Type of canMineObsidian:", typeof canMineObsidian);
console.log("Type of diamondSword:", typeof diamondSword);
console.log("Type of netherPortalStatus:", typeof netherPortalStatus);

// Extension: What if we assign a string to zombieCount?
zombieCount = "123";
console.log("New zombieCount:", zombieCount);
console.log("New type of zombieCount:", typeof zombieCount);

// 2. Compare Two Numbers
// Write a program that compares two numbers and prints whether the first is greater than, less than, or equal to the second.

let steveLevel = 7;
let alexLevel = 12;

if (steveLevel > alexLevel) {
  console.log("Steve is a higher level than Alex.");
} else if (steveLevel < alexLevel) {
  console.log("Alex is a higher level than Steve.");
} else {
  console.log("Steve and Alex are on the same level.");
}

// 3. Movie Night Eligibility
// Use a variable to represent someone's age. Print whether they can watch a PG-13 or R-rated movie.

let age = 15;

if (age < 5) {
  console.log("Too young for movies! Are you just here for the popcorn?");
} else if (age < 13) {
  console.log("Get ready for some epic animated adventures!");
} else {
  console.log("Shouldn’t you be in a meeting or doing taxes or something?");
}

// 4. Traffic Light Logic
// Based on the value of a variable light, print instructions like a traffic light.

let light = "green";

if (light === "green") {
  console.log("Go!");
} else if (light === "yellow") {
  console.log("Slow down!");
} else if (light === "red") {
  console.log("Stop!");
} else {
  console.log("Traffic light unknown state.");
}

// 5. Boolean Practice - Weather
// Write a program using && and || to make decisions based on rain and umbrellas.

let isRaining = true;
let hasUmbrella = false;

if (isRaining && hasUmbrella) {
  console.log("You're good to go — just don't forget your umbrella!");
} else if (isRaining && !hasUmbrella) {
  console.log("Better stay under cover until the storm passes.");
} else if (!isRaining || hasUmbrella) {
  console.log("Perfect day to explore the world.");
}

// Stretch: Precedence
console.log("Operator precedence test:", isRaining || (hasUmbrella && false));
