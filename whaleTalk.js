let input='Hello everybody!';
const vowels=['A', 'E', 'I', 'O', 'U'];
let resultArray=[];
input=input.toUpperCase();

for(i=0; i<input.length; i++){
    if (input[i]==='E' || input[i]=== 'U'){
        resultArray.push(input[i]);}
    for(j=0; j<vowels.length; j++){
    if (input[i]===vowels[j]){
        resultArray.push(input[i]);
        }
    }
}
console.log(resultArray.join(""));