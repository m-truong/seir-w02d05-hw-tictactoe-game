/**
 * Cached DOM Nodes
 */ 
const clickedCells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector(".game-status");
gameStatus.innerText = `Please click a cell to start the game`;

/**
 * Global currPlayer Toggler
 */
let currPlayer = "X";
const currentPlayerTurn = () => gameStatus.innerText = `It is now ${currPlayer}'s turn, please click a cell`;

/**
 * Handle Cell Clicked Function
 */
const handleCellClicked = (cell) => {
    if (cell.innerHTML === '' && currPlayer === "X") {
        console.log("Handle X is executing");
        handleXPlayer(cell);
        switchPlayer();
    } else if (cell.innerHTML === '' && currPlayer === "O") {
        console.log("Handle O is executing");
        handleOPlayer(cell);
        switchPlayer();
    }
    winningConditions(clickedCells);
}
/**
 * Handle "X" Player Helper Function
 */
const handleXPlayer = (cell) => {
    cell.innerText = "X";
    cell.classList.add("optionX");
    cell.classList.remove("optionO");
}
/**
 * Handle "O" Player Helper Function
 */
const handleOPlayer = (cell) => {
    cell.innerText = "O";
    cell.classList.add("optionO");
    cell.classList.remove("optionX");
}

/**
 * Switch Player from letter "X" or "O"
 */
const switchPlayer = () => {
    if (currPlayer === "X") {
        currPlayer = "O";
    } else if (currPlayer === "O") {
        currPlayer = "X";
    }
    gameStatus.innerHTML = currentPlayerTurn();
}

/**
 * If-Else Win Conditions
 */
const winningConditions = (cells) => {
    if (cells[0].innerHTML === "X" && cells[1].innerHTML === "X" && cells[2].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[0].innerHTML === "O" && cells[1].innerHTML === "O" && cells[2].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[3].innerHTML === "X" && cells[4].innerHTML === "X" && cells[5].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[3].innerHTML === "O" && cells[4].innerHTML === "O" && cells[5].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[6].innerHTML === "X" && cells[7].innerHTML === "X" && cells[8].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[6].innerHTML === "O" && cells[7].innerHTML === "O" && cells[8].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[1].innerHTML === "X" && cells[4].innerHTML === "X" && cells[7].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[1].innerHTML === "O" && cells[4].innerHTML === "O" && cells[7].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[2].innerHTML === "X" && cells[5].innerHTML === "X" && cells[8].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[2].innerHTML === "O" && cells[5].innerHTML === "O" && cells[8].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[0].innerHTML === "X" && cells[4].innerHTML === "X" && cells[8].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[0].innerHTML === "O" && cells[4].innerHTML === "O" && cells[8].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[2].innerHTML === "X" && cells[4].innerHTML === "X" && cells[6].innerHTML === "X") {
        alert("Player X wins!");
        location.reload();
    } else if (cells[2].innerHTML === "O" && cells[4].innerHTML === "O" && cells[6].innerHTML === "O") {
        alert("Player O wins!");
        location.reload();
    } else if (cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' && cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' && cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '') {
        alert("It's a Cat's Game!")
        location.reload();
    }
}

// loop through all cell-nodes in querySeletorAll Array and addEventListener 
const toggleXO = (cells) => {
    cells.forEach(cell => {
        cell.addEventListener("click", (evt) => {
            handleCellClicked(evt.target);
        });
    })
}

// * Reset Button * //
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    clickedCells.forEach(cell => {
        cell.innerText = '';
    });
});

// =========== START OF ADD-EVENT-LISTENER INVOKATIONS ========== // 
toggleXO(clickedCells);
