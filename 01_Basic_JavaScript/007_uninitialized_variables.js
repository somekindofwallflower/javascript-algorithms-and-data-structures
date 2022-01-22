"use strict";

/*
Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of undefined.
Mathematical operation on an undefined variable will be NaN which means "Not a Number".
Concatenate a string with an undefined variable, you will get a literal string of undefined.*/

// Task: Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

// Only change code below this line
var a;
var b;
var c;

// Only change code above this line
a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
