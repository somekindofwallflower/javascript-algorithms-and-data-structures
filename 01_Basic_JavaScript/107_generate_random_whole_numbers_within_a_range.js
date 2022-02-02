"use strict";

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(7, 15));
