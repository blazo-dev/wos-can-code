/*
Try solving these on your own:

Write a program that checks if a number is positive, negative, or zero.
Create a temperature checker that suggests a coat if it's cold.
Write a simple quiz grader:
A for 90+
B for 80–89
C for 70–79
F for anything below
*/

let number = -1;

if (number < 70) {
  console.log("F");
} else if (number < 79) {
  console.log("C");
} else if (number < 89) {
  console.log("B");
} else {
  console.log("A");
}
