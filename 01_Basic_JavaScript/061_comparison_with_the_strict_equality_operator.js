"use strict";

/*
Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both values being compared to a common type,
the strict equality operator does not perform a type conversion.*/

// Task: Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

// Setup
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict("7"));
console.log(testStrict(7));

