console.log('Hello')
//Test Push of RPS-UI branch

let getComputerChoice = () =>{
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex];
}

// console.log(getComputerChoice())
let scoreC =0;
let scoreP = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection.toUpperCase()==computerSelection.toUpperCase())
        console.log( "Its a draw")
    else if(playerSelection.toUpperCase()=='ROCK')
    {
        if(computerSelection.toUpperCase() == 'PAPER')
            {
                scoreC++;
            console.log("Computer wins")
            }
        else
        {
            scoreP++;
            console.log("Player wins")
        }
    }
    else if(playerSelection.toUpperCase()=='PAPER')
    {
        if(computerSelection.toUpperCase() == 'SCISSORS')
        {
            scoreC++;
            console.log("Computer wins")
           
        }
        else
        {
            scoreP++;
            console.log("Player wins")
        }
    }
    else if(playerSelection.toUpperCase()=='SCISSORS')
    {
        if(computerSelection.toUpperCase() == 'ROCK')
        {
            scoreC++;
           console.log("Computer wins")
        }
        else
        {
            scoreP++;
            console.log("Player wins")
        }
    }

    
  }
   
  //const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playerSelection)
//   console.log(computerSelection)
//   console.log(playRound(playerSelection, computerSelection));


  let game = () => {

  


    for(let i=0; i<5; i++)
    {
        let playerSelection  = prompt('Type your move')
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

    }
    if(scoreC > scoreP)
    console.log('Computer wins series')
    else if(scoreP> scoreC )
     console.log('Player wins series')
     else
     console.log('Series is a Draw')
  }

  game();