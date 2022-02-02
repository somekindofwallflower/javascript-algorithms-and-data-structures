"use strict";

/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.*/


// Task: Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);
