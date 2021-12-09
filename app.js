//1
function kelvinToFahrenheit(kelvin){
    let celsius=kelvin-273; // grade celsius
    fahrenheit=celsius*(9/5)+32;//grade fahrenheit
    fahrenheit=Math.floor(fahrenheit);//grade fahrenheit rotungit
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
}
kelvinToFahrenheit(296);

//2
function humanAgeInDogYears (myAge){
let earlyYears=2;
earlyYears*=10.5;//number of dog years accounted for my early years
laterYears=myAge-2;//later years
laterYears*=4;//number of dog years accounted for my later years
let myAgeInDogYears=earlyYears+laterYears;//this will be my age in dog years
console.log(`I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
}
humanAgeInDogYears(38);

//3
function answerMyQuestion(userName, userQuestion){
let answer = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];
userName ? console.log (`Hello, ${userName}!`)
: console.log ('Hello!');
console.log(`${userName} asked: ${userQuestion}`);
randomNumber=Math.floor(Math.random() * 8);
eightBall=answer[randomNumber];
console.log(`The eight ball answered: ${eightBall}`);
}
answerMyQuestion('nina', 'question?');

//4
function raceTime(userAge, registeredEarly){
let raceNumber = Math.floor(Math.random() * 1000);
if (userAge>18 && registeredEarly) {
    raceNumber+=1000};
if (userAge>18 && registeredEarly) {
  console.log(`nr. ${raceNumber} will race at 9.30 am`);
} else if (userAge>18 && !registeredEarly) {
  console.log(`nr. ${raceNumber} will race at 11.00am`);
} else if (userAge<18) {
  console.log(`nr.${raceNumber} will race at 12.30pm`);
} else {
  console.log('see the registration desk');
}
}
raceTime(21, true)