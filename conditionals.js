
//1
let a=3;
let b=4;
(a>b) ? console.log(`${a} is the larger`): 
    console.log(`${b} is the larger`);

//2
let n=3;
let m=-7;
let l=2;
if ((n*m*l)<0){
    console.log("The sign is -")
} else
    console.log("The sign is +");

//3
let num1=4;
let num2=0;
let num3=-1;
if (num1>num2&&num1>num3){
    (num2>num3) ? console.log(num1, num2, num3):
    console.log(num1, num3, num2);
} else if (num2>num1&&num2>num3){
    (num1>num3) ? console.log(num2, num1, num3):
    console.log(num2, num3, num1);
}else  if (num3>num1&&num3>num2){
    (num3>num2) ? console.log(num3, num1, num2):
    console.log(num3, num2, num1);
}

//4
let item1=-5;
let item2=-2;
let item3=-6;
let item4=0;
let item5=-1;
if (item1>item2&&item1>item3&&item1>item4&&item1>item5){
    console.log(item1);
} else if (item2>item1&&item2>item3&&item2>item4&&item2>item5){
    console.log(item2);
} else if (item3>item1&&item3>item2&&item3>item4&&item3>item5){
    console.log(item3);
} else if (item4>item1&&item4>item2&&item4>item3&&item4>item5){
    console.log(item4);
} else {
    console.log(item5);
}