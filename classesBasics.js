//Prototype 
let prototypeButton = {
    id: 'prototype',
    backgroundColor: 'background-color',
    text: 'Prototype button',
    onClickMethod: function() {
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    },
    renderMethod: function() {
        console.log(`<button id="${this.id}" style="${this.backgroundColor}: red;">${this.text}</button>`)
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
    this.backgroundColor = 'background-color'
    this.text = text
    this.onClickMethod = function(){ 
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    }
    this.renderMethod = function(){
        console.log(`<button id="${this.id}" style="${this.backgroundColor}: yellow;">${this.text}</button>`)
    }
}
let buttonF = new functionButton('Function button')
buttonF.onClickMethod()
buttonF.renderMethod()

//Class
class classButton {
    constructor (text){
        this.id = 'class';
        this.backgroundColor = 'background-color';
        this.text = text;
    }
    onClickMethod(){ 
        console.log(`"${this.text}" was clicked - where "${this.id}" is the ID of the button`)
    }
    renderMethod(){
        console.log(`<button id="${this.id}" style="${this.backgroundColor}: green;">${this.text}</button>`)
    }
}
let buttonC = new classButton('Class button')
buttonC.onClickMethod()
buttonC.renderMethod()
