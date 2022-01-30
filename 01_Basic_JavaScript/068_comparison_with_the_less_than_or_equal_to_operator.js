"use strict";

/*
The less than or equal to operator (<=) compares the values of two numbers.
If the number to the left is less than or equal to the number to the right, it returns true.
If the number on the left is greater than the number on the right, it returns false.
Like the equality operator, the less than or equal to operator converts data types.*/

// Task: Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessOrEqual(10);
