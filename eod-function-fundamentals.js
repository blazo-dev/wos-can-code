// 👋 Say Hello
// Create a function called sayHello that prints "Hello, world!" using console.log().
// No return needed — just speak it!

function sayHello() {
    console.log("Hello World!");
}

// 🎨 Get Your Favorite Color
// Write a function called getFavoriteColor that returns your favorite color as a string.
// Then log the result:
function getFavoriteColor() {
    console.log("Red");
}

// 🍕 Make a Pizza
// Write a function called makePizza(topping) that returns a string like:
// "Here’s your pizza with [topping]!"
// Try calling it with a few toppings!
function makePizza(topping) {
    console.log(`Here's your pizza with ${topping}`);
}

makePizza()

// ➕ Add Two Numbers
// Write a function called add(x, y) that returns the sum of two numbers.
// Call it and log the result.
function add(x, y) {
    return x + y;
}

// 🙋‍♀️ Greet a User
// Write a function greetUser(name) that returns a string like:
// "Hello, Cynthia!"
// Then wrap the call in console.log().
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Cynthia")

// 📈 Get a Grade Message
// Write a function called gradeMessage(score) that returns:
// "Great job!" if score is 90 or above
// "Nice effort!" if it’s between 70 and 89
// "Keep trying!" otherwise
// Use if / else if / else.
function gradeMessage(score) {
    if (score < 70) return "Keep Trying!";
    else if (score < 89) return "Nice effort!";
    else return "Great job!";
}

console.log(gradeMessage(100));


// 🐶 Describe a Pet
// Write a function called describePet(type, name) that returns:
// "My pet [type] is named [name]."
// Try calling it with two different animals.
// Bonus: What happens if you flip the order of the arguments?

function describePet(type, name) {
    return `My pet ${type} is named ${name}.`
}

console.log(describePet("cat", "Elsa"));
console.log(describePet("Elsa", "cat"));

// ✖️ Double the Number
// Write a function double(n) that returns the number multiplied by 2.
// Then:
// Store the result in a variable
// Print the result

function double(number) {
    return number * 2;
}

const doubledNumber = double(2);
console.log({ doubledNumber });