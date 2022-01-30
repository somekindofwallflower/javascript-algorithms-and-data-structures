"use strict";

// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements

/*
Task: Change the chained if/else if statements into a switch statement.

    function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line

        if (val === "bob") {
            answer = "Marley";
        } else if (val === 42) {
            answer = "The Answer";
        } else if (val === 1) {
            answer = "There is no #1";
        } else if (val === 99) {
            answer = "Missed me by this much!";
        } else if (val === 7) {
            answer = "Ate Nine";
        }

        // Only change code above this line
        return answer;
    }

chainToSwitch(7);*/


function chainToSwitch(val) {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

chainToSwitch(7);
