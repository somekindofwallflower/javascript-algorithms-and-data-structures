"use strict";

/*In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck.
This is called Card Counting.
Having more high cards remaining in the deck favors the player.
Each card is assigned a value according to the table below.
When the count is positive, the player should bet high.
When the count is zero or negative, the player should bet low.*/

/*
Count Change	Cards
+1	            2, 3, 4, 5, 6
0           	7, 8, 9
-1          	10, 'J', 'Q', 'K', 'A'
*/

/*
Task: You will write a card counting function.
It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table).' +
'The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
Example Outputs: -3 Hold or 5 Bet
*/

let count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
           count += 0;
           break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if(count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
