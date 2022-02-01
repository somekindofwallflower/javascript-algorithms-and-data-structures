"use strict";

// You can add new properties to existing JavaScript objects the same way you would modify them.

// Task: Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "Bow-wow";
console.log("The value of bark property in myDog object is: ", myDog.bark);
