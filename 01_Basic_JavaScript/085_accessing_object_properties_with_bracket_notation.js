"use strict";

// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// Task: Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

console.log("Entree value is: ", entreeValue);
console.log("Drink value is: ", drinkValue);
