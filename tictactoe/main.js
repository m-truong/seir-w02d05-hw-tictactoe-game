console.log("JavaScript file is running...");
// Global currPlayer toggler
let currPlayer = "X";
const gameStatus = document.querySelector(".game-status");
gameStatus.innerText = `Please click a cell to start the game`;
const currentPlayerTurn = () => gameStatus.innerText = `It is now ${currPlayer}'s turn, please click a cell`;

// Cached Array of All Queried <divs> 
const clickedCells = document.querySelectorAll(".cell");

const switchCaseStatements = (cells) => {
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
        alert("It's a cat's tie!")
        location.reload();
    }
}

/**
 * SwitchPlayer from letter "X" or "O"
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
 * Handle cell clicked function
 */
const handleCellClicked = (cell) => {
    if (cell.innerHTML === '' && currPlayer === "X") {
        console.log("Handle X is executing");
        handleXPlayer(cell);
        // switchCaseStatements(clickedCells);
        switchPlayer();
    } else if (cell.innerHTML === '' && currPlayer === "O") {
        console.log("Handle O is executing");
        handleOPlayer(cell);
        
        switchPlayer();
    }
    switchCaseStatements(clickedCells);
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
// Adds a Reset Button EventListener with resetAllCells() callback
resetBtn.addEventListener("click", () => {
    clickedCells.forEach(cell => {
        cell.innerText = '';
    });
    location.reload();
});

// =========== START OF ADD-EVENT-LISTENER INVOKATIONS ========== // 
toggleXO(clickedCells);
