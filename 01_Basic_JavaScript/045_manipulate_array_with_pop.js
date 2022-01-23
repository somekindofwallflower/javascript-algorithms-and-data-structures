"use strict";

// Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Task: Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log("'Element removed frm the array is:", removedFromMyArray);
