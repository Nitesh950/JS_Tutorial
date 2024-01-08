let resultMessage = "";
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".image-file");

//comuter choice
function generateComputerChoice() {
    let availableChoices = ["rock", "paper", "scissors"];
    let choiceIndex = Math.floor(Math.random() * 3);
    return availableChoices[choiceIndex];
  }

//user choice  
choices.forEach((box) => {
  box.addEventListener("click", () => {
    let userChoice = box.getAttribute("id");
    decideWinner(userChoice);
  });
});


//comparison logic
function decideWinner(userChoice) {
  let compChoice = generateComputerChoice();
  if (compChoice === userChoice) {
    resultMessage = "The game was a draw";
  } else {
    //user win cases
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      resultMessage = `You win! Computer chose ${compChoice}.`;
      userScore++;
    }
    //computer win cases
    else {
      resultMessage = `Computer wins! Computer chose ${compChoice}.`;
      compScore++;
    }
  }
  declareWinner(resultMessage);
}

function declareWinner(resultMessage) {
  let winMessage = document.querySelector(".win-message");
  let humanScorCount = document.querySelector("#human");
  let compScorCount = document.querySelector("#comp");
  humanScorCount.innerText = userScore;
  compScorCount.innerText = compScore;
  winMessage.innerText = resultMessage;
}
