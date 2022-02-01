"use strict";

// Task: Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
}
while (i < 5) {
    i++;
}

console.log(myArray)
