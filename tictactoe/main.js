console.log("JavaScript file is running...");
// Game "state" or React "functional-state"
// let gameWinState = false;
// let gameLoseState = true;

// Hmm what kind of data-structures to store the player1/player2 decisions? 
// Data Structure Storing the possible winningConditions? 
const winningArray = ["012", "345", "678", "147", "258", "048", "246"]
const winningNumbers = "012345678147258048246";

let playerXChoices = "";
let playerOChoices = "";

// const pushesPlayerChoices = (cells) => {
//     cells.forEach(cell => {
//         cell.addEventListener("click", (evt) => {

//             const choice = parseInt(evt.target.getAttribute("data-cell-index"));
//             // console.log(choice);

//             // need to create a NEW ARRAY and PUSH IT INTO the the player's choices
//             addPlayerChoice(evt.target);
//             // player1Choice.push(newArray)

//         });
//     })
// }

/**
 * Plugs cell index into player "X" or "O"'s array! 
 */
const addPlayerChoice = (cell) => {
    if (currPlayer === "X") {
        console.log("playerXChoices is executing...");
        playerXChoices += cell.getAttribute("data-cell-index");
        console.log(playerXChoices);
    } else if (currPlayer === "O") {
        console.log("playerOChoices is also executing...");
        playerOChoices += cell.getAttribute("data-cell-index");
        console.log(playerOChoices);
    }
}
/**
 * For loop that checks if playerXorO's choices match any substring! 
 */

const winValidation = (stringCode) => {
    // console.log("PlayerX Choices are " + arg1);
    for (let k = 0; k < stringCode.length; k++) { // won't execute for length < 3 (minum 3) 
        if (stringCode.length >= 3) { // greater or = to 3 length
            let substring = stringCode.substr(k, k + 3);
            console.log("Did this execute? " + substring);
            if (winningNumbers.includes(substring)) {
                gameStatus.innerText = `The game is over, ${currPlayer} has won!`
                removeXO(clickedCells);
            }



            // for (let combo in winningArray) {
            //     if (combo === substring) {

            //     }
            // }
        }
    }

    // console.log("PlayerO Choices are " + arg2);
}


// Global currentPlayer toggler
let currPlayer = "X";
const gameStatus = document.querySelector(".game-status");
gameStatus.innerText = `Please click a cell to start the game`;
const currentPlayerTurn = () => gameStatus.innerText = `It is now ${currPlayer}'s turn, please click a cell`;
/**
 * SwitchPlayer from letter "X" or "O"
 */
const switchPlayer = () => {
    // currPlayer = !currPlayer;
    // currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currPlayer === "X") {
        currPlayer = "O";
    } else if (currPlayer === "O") {
        currPlayer = "X";
    }
    gameStatus.innerHTML = currentPlayerTurn();
}

/**
 * Handle cell clicked function
 */
const handleCellClicked = (cell) => {
    // if empty fill "O" OR if NOT 
    if (cell.innerHTML === '' && currPlayer === "X") {
        console.log("Handle X is executing");
        handleXPlayer(cell);
        addPlayerChoice(cell);
        winValidation(playerXChoices);
        switchPlayer();
    } else if (cell.innerHTML === '' && currPlayer === "O") {
        console.log("Handle O is executing");
        handleOPlayer(cell);
        addPlayerChoice(cell);
        winValidation(playerOChoices);
        switchPlayer();
    }
    // Note: this is using globally-scoped VARIABLE! 
    // winValidation(playerXChoices, playerOChoices); 
}
/**
 * Handle "X" Player
 */
const handleXPlayer = (cell) => {
    cell.innerText = "X";
    cell.classList.add("optionX");
    cell.classList.remove("optionO");
}
/**
 * Handle "O" Player
 */
const handleOPlayer = (cell) => {
    cell.innerText = "O";
    cell.classList.add("optionO");
    cell.classList.remove("optionX");
}

// Cached Array of All Queried <divs> 
const clickedCells = document.querySelectorAll(".cell");

// loop through all cell-nodes in querySeletorAll Array and addEventListener 
const toggleXO = (cells) => {
    cells.forEach(cell => {
        cell.addEventListener("click", (evt) => {
            handleCellClicked(evt.target);
            // gameStatus.innerText = `${cell.innerText} has just played, it is now the next player's turn`;
        });
    })
}
const removeXO = (cells) => {
    cells.forEach(cell => {
        cell.removeEventListener("click", handleCellClicked);
    })
}
// * Reset Button* 
const resetBtn = document.querySelector("#reset");
// Adds a Reset Button EventListener with resetAllCells() callback
resetBtn.addEventListener("click", () => {
    clickedCells.forEach(cell => {
        cell.innerText = '';
    });
    playerXChoices = "";
    console.log(playerXChoices);
    playerOChoices = "";
    console.log(playerOChoices);
});


// =========== START OF ADD-EVENT-LISTENER INVOKATIONS ========== // 
toggleXO(clickedCells);
// pushesPlayerChoices(clickedCells);