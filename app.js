//1
function kelvinToFahrenheit(kelvin){
    let celsius=kelvin-273; // grade celsius
    fahrenheit=celsius*(9/5)+32;//grade fahrenheit
    fahrenheit=Math.floor(fahrenheit);//grade fahrenheit rotungit
    return fahrenheit;
}
kelvinToFahrenheit(296);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//2
let myAge=38;
let myAgeInDogYears;
function humanAgeInDogYears (myAge){
let earlyYears=2;
earlyYears*=10.5;//number of dog years accounted for my early years
laterYears=myAge-2;//later years
laterYears*=4;//number of dog years accounted for my later years
myAgeInDogYears=earlyYears+laterYears;//this will be my age in dog years
return myAgeInDogYears;
} 
humanAgeInDogYears(36);
console.log(`I am  ${myAgeInDogYears} years old in dog years.`);
//3
function answerMyQuestion(userName, userQuestion){
let answer = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];
userName ? console.log (`Hello, ${userName}!`)
: console.log ('Hello!');
console.log(`${userName} asked: ${userQuestion}`);
randomNumber=Math.floor(Math.random() * 8);
eightBall=answer[randomNumber];
return eightBall;
}
answerMyQuestion('nina', 'question?');
console.log(`The eight ball answered: ${eightBall}`);
//4
let raceNumber;
let time='';
function raceTime(userAge, registeredEarly){
raceNumber = Math.floor(Math.random() * 1000);
if (userAge>18 && registeredEarly) {
    raceNumber+=1000};
if (userAge>18 && registeredEarly) {
  time='9.30 am';
  return time;
} else if (userAge>18 && !registeredEarly) {
  time='11.00 am';
  return time;
} else if (userAge<18) {
  time='12.30 pm'
} else {
  time=': see the registration desk';
  return time;
}
}
raceTime(20, true);
console.log(`nr. ${raceNumber} will race at ${time}`);
