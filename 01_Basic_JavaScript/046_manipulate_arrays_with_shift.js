"use strict";

// pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.


// Task: Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray = myArray.shift();
console.log("Shifted value is: ", removedFromMyArray);
