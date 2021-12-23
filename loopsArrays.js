//1 numbers from 1 to 10
for(i=1; i<=10; i++){
    console.log(i)
}
//2 odd numbers less than 100
for (j=1; j<100; j++){
    if (j % 2 !== 0){
        console.log(j);
    }
}
//3  multiplication table with 7
a=7;
for(b=1; b<=10; b++){
    console.log(`${b} * ${a} = ${b*a}`);
    }
//4 multiplication tables with numbers from 1 to 10
for(i=1; i<=10; i++){
    for(j=1; j<=10; j++){
        console.log(`${j} * ${i} = ${j*i}`)
    }
}
//5 sum of numbers from 1 to 10
s=0;
for(i=1; i<=10; i++){
    s=s+i;
}
console.log(`the sum of numbers from 1 to 10 is ${s}`);
//6 calculate 10!
f=10;
for(i=9;i>=1;i--){
    f=f*i;
}
console.log(`the factorial of 10 is ${f}`);
//7 sum of odd numbers greater than 10 and less than 30
let sum=0;
for(i=11; i<=29; i+=2){
    sum+=i;
}
console.log(`sum of odd numbers greater than 10 and less than 30 is ${sum}`)
//8 sum of numbers in an array of numbers
let array=[1, 5, 8, 3, 7, 2, 4];
let sum8=0;
for (i=0; i<array.length; i++){
    sum8+=array[i];
}
console.log(`sum of numbers in an array is ${sum8}`);
//9 average of the numbers in an array of numbers
let array9=[1, 5, 8, 3, 7, 2, 4];
let avr;
let sum9=0;
for (i=0; i<array.length; i++){
    sum9+=array9[i];
}
avr=sum9/array9.length;
console.log(`average of the numbers in an array is ${avr}`);
//10 function positive numbers
let numbers=[-1, 5, -8, 3, -7, 2, 4];
let positiveArray=numbers.filter(number=>{
    return number>0;
});
console.log(positiveArray);
//11 maximum number in an array of numbers
let numbers11 = [-1, 5, -8, 3, -7, 2, 4];
maxNum=numbers11[0];
for(i=0; i<numbers11.length; i++){
    if(maxNum<numbers11[i]){
        maxNum=numbers11[i];
    }
}
console.log(`max number is ${maxNum}`);
//12 if a number is prime
function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
        return false;
        }
    }
    return num > 1;
}
console.log(isPrime(4));
//13 sum of digits of a positive integer number
let positiveNum=123456;
let digitsSum=0;
while (positiveNum) {
    digitsSum += positiveNum % 10;
    positiveNum = Math.floor(positiveNum / 10);
}
console.log(digitsSum);
//14  first 100 prime numbers
let primeNum14=[];
let num14=0;
function isPrime2 (num) {
    for (i = 2; num > i; i++) {
        if (num % i == 0) {
        return false;
        }
    } 
    return num > 1;
}
j=2;
while (primeNum14.length<100){
    if (isPrime2(j)==true){
        primeNum14.push(j);}
        j++;
}
console.log(primeNum14)
//15 Rotate an array to the left 1 position
let array15=[1,2,3,4,5,6];
let l=array15.length-1;
let lastItem=array15[0]
for (i=0; i<l; i++){
    array15[i]=array15[i+1]
}
array15[l]=lastItem
console.log(array15);
//16 Reverse an array
let array16=[1,2,3,4,5,6,7,8,9];
let reversedArray=array16.reverse();
console.log(reversedArray);
//17 merge two arrays and return the result as a new array
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
function mergedArrays(){
    let array3=array1.concat(array2);
    return array3;
}
console.log(mergedArrays(array1, array2));
//18 
let arr1=[1, 2, 3, 4, 5, 6];
let arr2=[1, 3, 5, 7, 9];
let arr3=[];
arr3 = 
    arr1.concat(arr2)
    .filter(e=> !arr1.includes(e) || !arr2.includes(e))
console.log(arr3);
//19 new array with distinct elements
let arr=[2, 1, 15, 25, 30, 15, 3, 6, 1, 7, 1];
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
unique = arr.filter(onlyUnique);
console.log(unique);
//20 number of words in a text
function wordCount(str){
    return str.split(" ").length
}
console.log(wordCount("hello world, very big string, another word"))