"use strict";

// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

// Task: Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder";
console.log("My dog name is: ", myDog["name"]);
