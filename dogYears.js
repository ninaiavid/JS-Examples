const myAge=38; //this is my age
let earlyYears=2; //early years
earlyYears*=10.5;//number of dog years accounted for my early years

let laterYears=myAge-2;//later years

laterYears*=4;//number of dog years accounted for my later years
console.log(`Early years= ${earlyYears}\nLater years= ${laterYears}`);
let myAgeInDogYears=earlyYears+laterYears;//this will be my age in dog years

let myName='Nina'.toLowerCase();// my name will be returned with lowercase letters
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//String interpolation will return the result with string and variables value