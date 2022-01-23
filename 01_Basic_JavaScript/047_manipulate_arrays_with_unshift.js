"use strict";

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Task: Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log("My array: ", myArray);
