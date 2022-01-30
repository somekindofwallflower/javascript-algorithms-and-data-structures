"use strict";

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values.
// However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.


// Task: The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
