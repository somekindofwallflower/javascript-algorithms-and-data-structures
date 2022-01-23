"use strict";

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// Task: Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater"
    return outerWear;
}

console.log("Result", myOutfit());
