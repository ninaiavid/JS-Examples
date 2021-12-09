const rock='rock';
const paper='paper';
const scissors='scissors';
const getUserChoice = (userInput) => {
    userInput=userInput.toLowerCase();
    if (userInput == rock || userInput == paper || userInput == scissors){ 
        return userInput;
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
    return computerChoice;
}
const determineWinner = (userInput, computerChoice) => {
    if ((userInput == rock && computerChoice == scissors) ||
        (userInput == scissors && computerChoice == paper)||
        (userInput == paper && computerChoice == rock)){
        console.log("User won!");
    } else if(userInput == computerChoice){
        console.log("Game ends in a draw!")
    } else {
        console.log("User lost!");
    }
}
function playGame(){
    let userChoice=getUserChoice('scissors');
    computerChoice=getComputerChoice();
    console.log(`the user choice is: ${userChoice} \nthe computer choice is: ${computerChoice}`);
    determineWinner(userChoice, computerChoice);
}
playGame();