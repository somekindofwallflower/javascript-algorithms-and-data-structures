"use strict";

// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// Task: Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25.
// Otherwise, will return the string No.

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
            return "Yes";
    }
    return "No";
}

testLogicalAnd(10);
