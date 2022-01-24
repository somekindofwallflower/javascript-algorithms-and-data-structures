"use strict";

// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// Task: Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
