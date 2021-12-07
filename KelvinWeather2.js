
let kelvin=293;
let expectedRes=68;
let fahrenheit;

// solution
function weather(kelvin){
    let celsius=kelvin-273; // grade celsius
    fahrenheit=celsius*(9/5)+32;//grade fahrenheit
    fahrenheit=Math.floor(fahrenheit);//grade fahrenheit rotungit
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
}

// function call
weather(293);

//test
let res = fahrenheit;
if(expectedRes === res) {
    console.log("test passed");
 } else {
  console.log(`test failed, reason: got ${fahrenheit}, expected ${expectedRes} !!!`);
 }