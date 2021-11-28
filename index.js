
// Functions 1
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Functions 2
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log(largest + " is the largest number");

// Functions 3
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
