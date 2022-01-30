"use strict";

/*
The greater than operator (>) compares the values of two numbers.
If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
Like the equality operator, the greater than operator will convert data types of values while comparing.*/

// Task: Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

testGreaterThan(10);
