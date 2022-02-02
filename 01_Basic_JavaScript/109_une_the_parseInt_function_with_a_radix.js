"use strict";

// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// Task: Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");
