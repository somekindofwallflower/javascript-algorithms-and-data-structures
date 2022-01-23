"use strict";

// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

/*
Task: The editor has two console.logs to help you see what is happening.
Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.
*/

function myLocalScope() {
    // Only change code below this line
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
