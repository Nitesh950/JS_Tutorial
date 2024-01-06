let boxes = document.querySelectorAll(".boxes");
let winMessage = document.querySelector("#message");

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn0 = true;

//input for each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true; //disable each box after input is taken
    checkWinner();  //winner is checked after each input
  });
});

function checkWinner() {
  for (let combination of winningCombinations) {
    let position1 = boxes[combination[0]].innerText;
    let position2 = boxes[combination[1]].innerText;
    let position3 = boxes[combination[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        declareWinner(position1);
      }
    }
  }
}

function declareWinner(position1) {
  let winner = document.querySelector(".win-message");
  winner.innerText = `Congratulations! The winner is ${position1}`;
  winMessage.classList.remove("message-hide");
  winMessage.classList.add("message-show");
  disableBoxes(); //disable all boxes after winner is declared so that the game stops
}

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//logic for new game and reset game

let newGameBtn = document.querySelector("#new-game-button");
newGameBtn.addEventListener("click", resetGame);

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  turn0 = true;
  enableBoxes();
  winMessage.classList.remove("message-show");
  winMessage.classList.add("message-hide");
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
