/* TO DO  - VERIFY CODE LINE #'s in NOTES */

/* const for x/o class for ease of use to target 
cellEl is how we'll grab all 9 cells in HTML */
const X_CLASS = 'x';
const O_CLASS = 'o';
const cellEl = document.querySelectorAll('[xOcell]');

let xTurn = "";
let oTurn = ""; 

startGame(); /* initiator */

/* START GAME FUNCTION - touch that keyboard lightly */
function startGame () {
    cellEl.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    })
    hoverClass ()
}
/* End START GAME FUNCTION - ok now go Godzilla mode */

/* CTO - The event listener will only work ONE TIME with 
the {once: true} argument. This allows you to make it so
that the user can click on the cell and it will only fire 
one time! */ 

function handleClick (evt) { 
    const cell = evt.target;
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    newClick (cell, currentClass);
/*  Now we've got a class turn, assigned it
to currentClass, and have targeted the cell of eListen
click. Now we will want to pass this data to determine
how to mark the cell with X or O (based on currentClass
which we'll get from ternary operator saying if it's X
turn then return that data, otherwise it's O turn. */
    swapTurns ();
    hoverClass ();
}
function newClick(cell, currentClass) {
    cell.classList.add(currentClass)
}
/*Link to the classList.add () that accesses DOM
to pass the informatino of the click (cell and class of
turn) to lines 12-20 depending on which cell. This then 
displays to user that data on the HTML Browser dynamically
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList   */

function swapTurns () {
    xTurn = !xTurn;
}
/* this easy function just inverts the ternary operator
output from line 23. This step swaps turns and will
tell DOM to... TO DO */

function hoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (oTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}
/* first this will ensure all classes are cleared from the 
HTML board on hover and only show O if oTurn is true... 
otherwise X for xTurn */




/*----- constants -----*/

// 1.) Holding the player's choice of X/O each time
// 2.) winning number in a line
// 3.) x/o class for storing string that can be used

/*----- app's state (variables) -----*/

// 1.) player choices (AI/player 2 as well)
// 2.) Wins vs Losses (for best of 3 maybe?)
// 3.) Version of background maybe if you wanted theme
// 4.) X turn vs O turn

/*----- cached element references -----*/

// 1.) current class/id bring targeted (who's turn)
// 2.) 
// 3.) 

/*----- event listeners -----*/


// 1.) listen for click to the cell
// 2.) hover pseudo-class listen to show symbol for used cells
// 3.) event listener on button for new game
// 3.) event listener on button for play again

/*----- functions -----*/

// 1.) event listeners for clicks into cells
// 2.) logic to determine which turn
// 3.) check to see if win or tie (Cat's Game)
// 4.) switching players
// 5.) storing data and speaking with HTML for used cell
// 6.) dynamically pass this state data for CSS changes