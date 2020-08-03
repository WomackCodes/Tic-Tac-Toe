
/* const for x/o class for ease of use to target 
cellEl is how we'll grab all 9 cells in HTML */
const X_CLASS = 'x';
const O_CLASS = 'o';
const cellEl = document.querySelectorAll('[xOcell]');

let xTurn
let oTurn

/* CTO - The event listener will only work ONE TIME with 
the {once: true} argument. This allows you to make it so
that the user can click on the cell and it will only fire 
one time! */ 

cellEl.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick (evt) { 
    const cell = e.target
    const currentClass = xTurn ? X_CLASS : O_CLASS
}







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