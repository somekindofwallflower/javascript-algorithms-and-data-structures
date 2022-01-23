"use strict";

// Appending Variables to Strings

// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

/*Task: Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

const someAdjective = "";
let myStr = "Learning to code is ";

*/

const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log("My String", myStr);
