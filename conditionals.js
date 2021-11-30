
//1
let a=3;
let b=4;
(a>b) ? console.log(`${a} is the larger`): 
    console.log(`${b} is the larger`);

//2
let n=-3;
(a<0) ? console.log("The sign is -"):
    console.log("The sign is +");

//3
const points = [4, 0, -1];
points.sort(function(a, b){return a - b});
console.log(points);

//4
const points1 = [ -5, -2, -6, 0, -1];
points1.sort(function(a, b){return a - b});
console.log(`The largest of five numbers is: ${points1[4]}`);