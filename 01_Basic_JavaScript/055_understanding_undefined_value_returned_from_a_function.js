"use strict";

// A function can include the return statement but it does not have to.
// In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

// Task: Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

addThree();
addFive();
