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

function playRound(playerSelection, computerSelection){
    let playerWon;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "It's a draw!";
    }
    if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "rock")){
        playerWon = true;
    }

    else {
        return false;
    }
    return playerWon
}

function playGame(){
    let playerWins = 0;
    let computerWins = 0;
    
    for(let i=0; i<5; i++){
        playerInput = prompt("Choose rock, paper or scissors:")
        computerInput = getComputerChoice()
        let result = playRound(playerInput, computerInput);

        if (result == "It's a draw!"){
            console.log(result);
        }
        else if (result == false){
            console.log("You lost this round! " + computerInput.toUpperCase() + " beats " + playerInput.toUpperCase())
            computerWins++
        }
        else {console.log("You won this round! " + playerInput.toUpperCase() + " beats " + computerInput.toUpperCase())
            playerWins++
        }
    }
    if (playerWins > computerWins){
        result = " You won the game!";

    }
    else {result = " You lost the game!"}
    return ("Computer: " + computerWins + " Player: " + playerWins + result )
}