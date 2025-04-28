const board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset");

//winning combos
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

//win check
function checkWinner() {
    for (let pattern of winningCombos) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            //alert(`${board[a]} wins!`);
            console.log(`${board[a]} wins!`)
            return true;
        }

    }
    console.log("draw!");
    return false;
}


//function to handle cell clicks
function handleCellClick(event) {
    const index = event.target.getAttribute("data-index");

    if (board[index] === "") {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner()) {
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
    console.log("cell clicked");
});

resetBtn.addEventListener("click", () => {
    board.fill("");
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
});

