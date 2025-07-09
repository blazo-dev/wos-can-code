// ✅ Variable Declarations
var oldWay = "This uses var";
let modernWay = "This uses let";
const constantValue = 3.14;

// ✅ Naming Rules
let _underscoreOK = true;
let $dollarOK = 100;
let camelCaseName = "recommended style";
// let 2fast = "nope"; // ❌ starts with number
// let user-name = "nope"; // ❌ uses a dash

// ✅ Data Types

// String
let greeting = "Hello, WOS!";

// Number
let year = 2025;

// Boolean
let isEnrolled = true;

// Undefined
let score;

// Null
let emptyValue = null;

// Object
let student = {
  name: "Taylor",
  age: 22
};

// Array
let colors = ["red", "blue", "green"];

// Function
function sayHello() {
  console.log("Hello from a function!");
}

console.log(typeof oldWay);         // "string"
console.log(typeof modernWay);      // "string"
console.log(typeof constantValue);  // "number"

console.log(typeof _underscoreOK);  // "boolean"
console.log(typeof $dollarOK);      // "number"
console.log(typeof camelCaseName);  // "string"

console.log(typeof greeting);       // "string"
console.log(typeof year);           // "number"
console.log(typeof isEnrolled);     // "boolean"
console.log(typeof score);          // "undefined"
console.log(typeof emptyValue);     // ❗️ "object" (quirk in JS)
console.log(typeof student);        // "object"
console.log(typeof colors);         // "object" (arrays are a type of object)
console.log(typeof sayHello);       // "function"





