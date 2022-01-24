"use strict";

// We can take the return value of a function and assign it to a variable.

// Task: Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
console.log("Processed", processed);
