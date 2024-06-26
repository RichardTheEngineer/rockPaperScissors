const rockbtn = document.querySelector("button");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");
const result = document.querySelector("#result");
const gamePlayed = document.querySelector("#gamePlayed");
const playerScoreInfo = document.querySelector("#playerScore");
const computerScoreInfo = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

function getComputerChoice(){
    choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "rock";

        case 1:
            return "paper";
        
        case 2:
            return "scissors";

    }


}

function hasWon(){

    if (playerScore >= 5) {
        alert("You Win")
    }

    else if (computerScore >= 5){
        alert("Computer Wins")
    }
}

function playRound(playerSelection, computerSelection){
    let playerWon;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    gamePlayed.textContent = "Player: " + playerSelection + " Computer: " + computerSelection;

    if (playerSelection == computerSelection){
        console.log( "It's a draw!")
        result.textContent = "DRAW";
        hasWon()
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "rock")){
       console.log("Player Won");
       playerScore += 1;
       playerScoreInfo.textContent = "Player Score: " + playerScore;
       
       result.textContent = "WIN";
       hasWon()
    }

    else {
        computerScore += 1;
        computerScoreInfo.textContent = "Computer Score: " + computerScore;
        console.log("Player Lost");
        result.textContent = "LOSE";
        hasWon()
    }
    // console.log("return playerWon")
}

// function playGame(){
//     let playerWins = 0;
//     let computerWins = 0;
    
//     for(let i=0; i<5; i++){
//         playerInput = prompt("Choose rock, paper or scissors:")
//         computerInput = getComputerChoice()
//         let result = playRound(playerInput, computerInput);

//         if (result == "It's a draw!"){
//             console.log(result);
//         }
//         else if (result == false){
//             console.log("You lost this round! " + computerInput.toUpperCase() + " beats " + playerInput.toUpperCase())
//             computerWins++
//         }
//         else {console.log("You won this round! " + playerInput.toUpperCase() + " beats " + computerInput.toUpperCase())
//             playerWins++
//         }
//     }
//     if (playerWins > computerWins){
//         result = " You won the game!";

//     }
//     else {result = " You lost the game!"}
//     return ("Computer: " + computerWins + " Player: " + playerWins + result )
// }

