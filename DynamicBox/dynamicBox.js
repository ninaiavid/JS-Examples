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
    console.log(color);
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}
function colorRed() {
    color='red'
    console.log(color)
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}
function colorGreen() {
    color='green'
    console.log(color)
    container.innerHTML=`<div class="box" 
    style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
}