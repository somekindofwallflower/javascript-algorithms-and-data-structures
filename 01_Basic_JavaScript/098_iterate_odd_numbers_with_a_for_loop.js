"use strict";

// Task: Push the odd numbers from 1 through 9 to myArray using a for loop.

const myArray = [];

for (let i = 1; i <= 9; i++) {
    if(i % 2 != 0) {
        myArray.push(i);
    }
}

console.log(myArray);
