"use strict";

// In order to get the last letter of a string, you can subtract one from the string's length.

/*

Task: Use bracket notation to find the last character in the lastName variable.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line

*/

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log("Last letter of last name is: ", lastLetterOfLastName);
