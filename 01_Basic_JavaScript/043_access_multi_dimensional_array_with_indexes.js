"use strict";

// One way to think of a multi-dimensional array, is as an array of arrays.
// When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.


// Task: Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log("My data: ", myData);
