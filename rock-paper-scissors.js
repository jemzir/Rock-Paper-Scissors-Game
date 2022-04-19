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
    let playerScore = 0;
    let compScore = 0;
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
        playerScore += 1;
        return 'victory';
    } else if (lose) {
        compScore += 1;
        return 'defeat';
    } else {
        console.log('What the hell just happened??');
    }
}

function playRock() {
    if (computerPlay() === 'rock') {
        return 'tie';
    } else if (computerPlay() === 'paper') {
        return 'defeat';
    } else return 'victory';
}

function playPaper() {
    if (computerPlay() === 'rock') {
        return 'victory';
    } else if (computerPlay() === 'paper') {
        return 'tie';
    } else return 'defeat';
}

function playScissors() {
    if (computerPlay() === 'rock') {
        return 'defeat';
    } else if (computerPlay() === 'paper') {
        return 'victory';
    } else return 'tie';
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
        // playerSelection = prompt('What is your choice of weapon?')
        // .toLowerCase();
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

// UI for RPS game

let playerScore = 0;
let compScore = 0;

const div = document.querySelector('#buttons');

function endGame() {
    if (compScore === 5) {
        newDiv.textContent = 'Game Over! \nTry again??';
    } else if (playerScore === 5) {
        newDiv.textContent = 'YOU WIN! Congratulations!';
    }
}


const buttonRock = document.createElement('button');
buttonRock.addEventListener('click', () => {
    if (playRound('rock',computerPlay()) === 'victory') {
        playerScore += 1;
    } else if (playRound('rock',computerPlay()) === 'defeat') {
        compScore +=1;
    }
    roundResult = `${playerScore} - ${compScore}`
    newDiv.textContent = `${roundResult}`;
    endGame();
});

buttonRock.textContent = 'rock';
div.appendChild(buttonRock);

const buttonPaper = document.createElement('button');
buttonPaper.addEventListener('click', () => {
    if (playRound('paper',computerPlay()) === 'victory') {
        playerScore += 1;
    } else if (playRound('paper',computerPlay()) === 'defeat') {
        compScore +=1;
    }
    roundResult = `${playerScore} - ${compScore}`
    newDiv.textContent = `${roundResult}`;
    endGame();
});
buttonPaper.textContent ='paper';
div.appendChild(buttonPaper);

const buttonScissors = document.createElement('button');
buttonScissors.addEventListener('click', () => {
    if (playRound('scissors',computerPlay()) === 'victory') {
        playerScore += 1;
    } else if (playRound('scissors',computerPlay()) === 'defeat') {
        compScore +=1;
    }
    roundResult = `${playerScore} - ${compScore}`
    newDiv.textContent = `${roundResult}`;
    endGame();
});
buttonScissors.textContent ='scissors';
div.appendChild(buttonScissors);

const newDiv = document.createElement('div');
newDiv.textContent = '0 - 0';
div.insertAdjacentElement("beforebegin", newDiv);