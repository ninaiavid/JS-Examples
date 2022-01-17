
let button1 = document.getElementById('increment').addEventListener('click', buttonClick1);
function buttonClick1(){
    document.querySelector('#counter').value++;
}
let button2 = document.getElementById('decrement').addEventListener('click', buttonClick2);
function buttonClick2(){
    if (document.querySelector('#counter').value>1){
    document.querySelector('#counter').value--;
    }
}
