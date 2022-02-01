"use strict";

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Task: Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

console.log("Hat value is: ", hatValue);
console.log("Shirt value is: ", shirtValue);
