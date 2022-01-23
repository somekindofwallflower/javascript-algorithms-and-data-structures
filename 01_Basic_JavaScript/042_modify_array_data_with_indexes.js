"use strict";

// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

// Task: Modify the data stored at index 0 of myArray to a value of 45.

const myArray = [18, 64, 99];
myArray[0] = 45;
console.log("Updated array", myArray);
