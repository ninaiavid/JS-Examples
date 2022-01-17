const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
document.getElementById('button').style.marginLeft = '50%';
let button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(){
    let i = Math.floor(Math.random()*colors.length);
    document.querySelector('#main').style.backgroundColor = colors[i];
}
