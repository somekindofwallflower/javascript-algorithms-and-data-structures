"use strict";

/*
Task: Use bracket notation to find the second-to-last character in the lastName string.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line

*/

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log("Second to last letter of last name is: ", secondToLastLetterOfLastName);
