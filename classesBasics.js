//Prototype 
let prototypeButton = {
    id: 'prototype',
    color: 'red',
    text: 'Prototype button',
    onClickMethod: function() {
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    },
    renderMethod: function() {
        console.log(`<button id="${this.id}" style="background-color: ${this.color};">${this.text}</button>`)
    }
}
function createNewPrototypeButton (text){
    let buttonP = Object.create(prototypeButton);
    buttonP.text = text;
    return buttonP;
}
let newPrototypeButton = createNewPrototypeButton('PrototypeButton')
newPrototypeButton.onClickMethod()
newPrototypeButton.renderMethod()

// Function
function functionButton (text){
    this.id = 'function'
    this.color = 'yellow'
    this.text = text
    this.onClickMethod = function(){ 
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    }
    this.renderMethod = function(){
        console.log(`<button id="${this.id}" style="background-color: ${this.color};">${this.text}</button>`)
    }
}
let buttonF = new functionButton('Function button')
buttonF.onClickMethod()
buttonF.renderMethod()

//Class
class classButton {
    constructor (text){
        this.id = 'class';
        this.color = 'green';
        this.text = text;
    }
    onClickMethod(){ 
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    }
    renderMethod(){
        console.log(`<button id="${this.id}" style="background-color: ${this.color};">${this.text}</button>`)
    }
}
let buttonC = new classButton('Class button')
buttonC.onClickMethod()
buttonC.renderMethod()
