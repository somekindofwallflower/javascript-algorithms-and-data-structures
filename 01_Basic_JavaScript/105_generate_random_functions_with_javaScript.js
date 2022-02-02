"use strict";

/*
Random numbers are useful for creating random behavior.
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Thus Math.random() can return a 0 but never return a 1.*/

// Task : Change randomFraction to return a random number instead of returning 0.

function randomFraction() {
    return Math.random();
}

console.log(randomFraction());
