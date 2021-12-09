let userChoice;
const rock='rock';
const paper='paper';
const scissors='scissors';
const getUserChoice = (userInput) => {
    userInput=userInput.toLowerCase();
    if (userInput == rock || userInput == paper || userInput == scissors){ 
        userChoice=userInput;
        console.log(userChoice)
    } else { console.log('Please write your choise right')}
}
const getComputerChoice = () => {
    randomNumber=Math.floor(Math.random() * 3);
    if (randomNumber==0){
        computerChoice=rock;
    } else if (randomNumber==1){
            computerChoice=paper;
    } else if (randomNumber==2){
            computerChoice=scissors;
    }
    console.log(computerChoice);
}
const determineWinner = (userChoice, computerChoice) => {
    if ((userChoice == rock && computerChoice == scissors) ||
        (userChoice == scissors && computerChoice == paper)||
        (userChoice == paper && computerChoice == rock)){
        console.log("You won!");
    } else if(userChoice == computerChoice){
        console.log("Game ends in a draw!")
    } else {
        console.log("Wou lost!");
    }
}

getUserChoice('rock');
getComputerChoice();
determineWinner(userChoice, computerChoice);