function testScript(){  
    game()
   }  

function getComputerChoice(){
    var choice = ["Rock", "Paper", "Scissors"]; // These arrays are zero indexed so we need a random int generator for 0-2.
    var randomIntZeroToTwo = Math.floor(Math.random() * 3);

    return choice[randomIntZeroToTwo];
}

function playRound(playerSelection, computerSelection){
    var winnerString = "";

    if (playerSelection == computerSelection){
        winnerString = "You are both tied! No one won and no one lost!";
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        winnerString = "You won! The computer lost!";
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        winnerString = "You won! The computer lost!"
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        winnerString = "You won! The computer lost!";
    }else {
        winnerString = "The computer won! You lost!";
    }

    return winnerString;
}

function game(){
    var promptMessage = "Let's play Rock, Paper, Scissors. Go ahead and input your Rock, Paper, Scissors choice.";

    for (let i = 0; i < 5; ++i){
        var input = prompt(promptMessage, "Rock");
        var makeComputerChoose = getComputerChoice();
        var result = playRound(input, makeComputerChoose);
        console.log(result);
    }
}