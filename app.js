let user;
let computer;
let userScore = 0;
let computerScore = 0;


function player(playerInput) {
    playerInput= prompt('Play Rock Paper Scissors').toLowerCase().trim();
    if(playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return user = playerInput;
    }else {
    alert('Please enter a valid response');
    }
};

function computerPlay(){
    const randomNumber= Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
          computer = 'paper'
        break;
        case 1:
          computer = 'rock'
        break;
        case 2:
          computer = 'scissors'
    };
    return computer;
};

function playRound (playerSelection,computerSelection){
    do {
        if (playerSelection= player()){
            computerSelection= computerPlay();
            console.log(`You chose ${playerSelection}.\nComputer chose ${computerSelection}.`); 
            winner();
        };
    } while (!playerSelection);
};

function winner(){
    switch (user+computer) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            userScore+=1 ;
            console.log(`You won.\n${user} beats ${computer}.`);
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            computerScore+=1;
            console.log(`You Lose.\n${computer} beats ${user}.`);
            break;
            default:
            console.log(`It's a Tie.`);
    };
    console.log(`You:${userScore} vs Computer:${computerScore}`)
    return (userScore, computerScore);
};

const game= ()=>{
    for(let i=0; i<5; ++i){
        playRound();
    };
    console.log(`GAME OVER!\nYou:${userScore} \nComputer:${computerScore}`, 
    );
    getResult();
};

function getResult(){
    if (userScore > computerScore) {
        console.log('You won!');
    } else if (userScore < computerScore) {
        console.log('You lose!');
    } else
        console.log(`It's a tie!`);
};


game();