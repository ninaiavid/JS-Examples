let size=100
let color='black'
function increase(){
    size+=10;
    console.log(size);
    container.innerHTML = `<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
}
function decrease() {
    size-=10;
    console.log(size);
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
}
function colorBlue() {
    color='blue'
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}
function colorRed() {
    color='red'
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}
function colorGreen() {
    color='green'
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}