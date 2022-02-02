"use strict";

/*
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1.*/


// Only change code below this line
let countArray = [];
function countdown(n) {
    if(n < 1) {
        return countArray;
    } else {
        countArray.push(n);
        countdown(n - 1);
        return countArray;
    }
}

console.log(countdown(6));
