// creating a function called 'computerPlay'
// use a math random that is limited to 3 values and assign that to return one of the values
// func should return 'rock' 'paper' or 'scissors'

function computerPlay() {
    let choice = Math.floor(Math.random() * 3); 
    return ['rock', 'paper', 'scissors'][choice]; 
}

let playerSelection;

// function should take player selection and computer's 
// function should output messages: win, lose, or tie for results...
// later function needed to take a tally for rounds played
// playerSelection needs to take input of any capitalization of result

function playRound(playerSelection, computerSelection) {
    let win = (
        playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper');
    let lose = (
        playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock');

    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (win) {
        return 'victory';
    } else if (lose) {
        return 'defeat';
    } else {
        console.log('What the hell just happened??');
    }
}

// run rounds of 'playRound' and keep tally on wins and losses.
// console.log the winner and loser from each round
// each round should let input from user
// reminder: input should still allow user to to spell 'rOcK' okay
// game should keep tally... 

function game() {
    let PlayerWinCounter = 0;
    let CompWinCounter = 0;
    console.log('First to 3 wins.. ready?')

    for (let i = 0; i < 20 || PlayerWinCounter >= 3 || CompWinCounter  >= 3; i += 1) {
        // user input
        playerSelection = prompt('What is your choice of weapon?')
        .toLowerCase();
        console.log(playerSelection);

        let result = playRound(playerSelection, computerPlay());

        if (result === 'victory') {
            PlayerWinCounter += 1;
            console.log(`You won! \n
            ${PlayerWinCounter} - ${CompWinCounter}`);
        } else if (result === 'defeat') {
            CompWinCounter += 1;
            console.log(`You lost... \n
            ${PlayerWinCounter} - ${CompWinCounter}`);
        } else if (result === 'tie') {
            console.log(`TIE \n
            ${PlayerWinCounter} - ${CompWinCounter}`);
        }
        
        if (PlayerWinCounter > CompWinCounter && PlayerWinCounter == 3) 
        {
            console.log(`VICTORY!\nFINAL SCORE: ${PlayerWinCounter} - ${CompWinCounter}`);
            break;
        } else if (PlayerWinCounter < CompWinCounter && CompWinCounter==3) {
            console.log(`DEFEAT... TRY AGAIN?\nFINAL SCORE: ${PlayerWinCounter} - ${CompWinCounter}`);
            break;
        }
        }
    }