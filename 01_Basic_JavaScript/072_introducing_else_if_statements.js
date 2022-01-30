"use strict";

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.


// Task: Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);
