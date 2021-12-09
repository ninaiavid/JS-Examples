//data
let answer = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
let userName= 'nina';
let userQuestion='question?';
let eightBall='';
let randomNumber;
//solution
function solution(userName, userQuestion){
userName ? console.log (`Hello, ${userName}!`)
: console.log ('Hello!');
console.log(`${userName} asked: ${userQuestion}`);
randomNumber=Math.floor(Math.random() * 8);
console.log(randomNumber);
eightBall=answer[randomNumber];
console.log(`The eight ball answered: ${eightBall}`);
}
//function call
solution('nicu', 'another question?');
//test

if (answer.indexOf(eightBall)===randomNumber){
    console.log('test passed');
} else {
  console.log('test failed');
}