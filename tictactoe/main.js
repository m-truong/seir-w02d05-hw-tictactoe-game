console.log("JavaScript file is running...");
// Game "state" or React "functional-state"
// let gameWinState = false;
// let gameLoseState = true;

// Global currentPlayer toggler
let currPlayer = "X";
const gameStatus = document.querySelector(".game-status");
gameStatus.innerText = `It is now ${currPlayer}'s turn`;

/**
 * Handle cell clicked function
 */
const handleCellClicked = (cell) => {
    if (cell.innerHTML !== '' || cell.innerHTML !== "X") {
        handle
    }
}

/**
 * Handle "O" Player
 */
const handleOPlayer = () => {

}
// Hmm what kind of data-structures to store the player1/player2 decisions? 
// Data Structure Storing the possible winningConditions? 
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const player1Choices = [
    [0, 1, 2],
    [3, 4, 5]
];
const player2Choices = [];

// Player Objects
const player1 = {
    name: "user1",
    choices: [],
    isPlayed: true
}
const player2 = {
    name: "user2",
    choices: [],
    isPlayed: true
}



// Cached Array of All Queried <divs> 
const clickedCells = document.querySelectorAll(".cell");

const pushesPlayerChoices = (cells) => {
    cells.forEach(cell => {
        cell.addEventListener("click", (evt) => {
            const choice = parseInt(evt.target.getAttribute("data-cell-index"));
            console.log(choice);
            // need to create a NEW ARRAY and PUSH IT INTO the the player's choices

            // player1Choice.push(newArray)

        });
    })
}

// loop through all cell-nodes in querySeletorAll Array and addEventListener 
const toggleXO = (cells) => {
    cells.forEach(cell => {
        cell.addEventListener("click", (evt) => {
            helperToggleXO(evt.target);
        });
    })
}

// clickHelperFunction that get's executed! 
const helperToggleXO = (cell) => {
    if (cell.innerText !== "X") {
        cell.innerText = "X";
        cell.classList.add("optionX");
        cell.classList.remove("optionO");
    } else if (cell.innerText !== "O") {
        cell.innerText = "O"
        cell.classList.add("optionO");
        cell.classList.remove("optionX");
    }
    gameStatus.innerText = `${cell.innerText} has just played, it is now the next player's turn`;
}

// * Reset Button* 
const resetBtn = document.querySelector("#reset");
// Adds a Reset Button EventListener with resetAllCells() callback
resetBtn.addEventListener("click", () => {
    clickedCells.forEach(cell => {
        cell.innerText = '';
    });
});


// =========== START OF ADD-EVENT-LISTENER INVOKATIONS ========== // 
toggleXO(clickedCells);
pushesPlayerChoices(clickedCells);