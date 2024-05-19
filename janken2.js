function getComputerChoice() {
    let dice = {1: "rock", 2: "paper", 3: "scissors"};
    return dice[Math.floor(Math.random() * 3) + 1];
};

//These three buttons call on all functions declared here
// and act as input for the player choice.
const btn1 = document.querySelector("#rock");
btn1.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    resetGame();
});

const btn2 = document.querySelector("#paper");
btn2.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    resetGame();
});

const btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
    resetGame();
    
});

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();

let finalAnnouncement = document.querySelector(".final");

let humScore = document.querySelector("#humanscore");
let compScore = document.querySelector("#computerscore");
let announcement = document.querySelector(".announce");

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        announcement.textContent = "It's a Tie!?";
        humScore.textContent = `Your score is : ${humanScore}`;
        compScore.textContent = `Computer score is : ${computerScore}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            announcement.textContent = `You Win!! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            humScore.textContent = `Your score is : ${humanScore}`;
            compScore.textContent = `Computer score is : ${computerScore}`;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") 
        || (computerChoice === "paper" && humanChoice === "rock") 
        || (computerChoice === "scissors" && humanChoice === "paper")) {
            announcement.textContent = `You Lose!! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
            humScore.textContent = `Your score is : ${humanScore}`;
            compScore.textContent = `Computer score is : ${computerScore}`;
    };
};

function resetGame() {
    if (humanScore === 5 || computerScore === 5) {
        humScore.textContent = "";
        compScore.textContent = "";
        if (humanScore > computerScore) {
            finalAnnouncement.textContent = `You Won! Congrats`;
        } else { 
           finalAnnouncement.textContent = `You Lost!`;

        };
        humanScore = 0;
        computerScore = 0;    
    };
};
