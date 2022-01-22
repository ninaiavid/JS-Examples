let level = { 
    procent: [0.30, 0.20, 0.15, 0.1, 0], 
    describe: ['Outstanding', 'Good', 'OKish', 'Bad', 'Never coming back']
}

//Renderin to HTML doc, radio buttons for choosing level service
function renderServiceLevel(level){
    let wrapper = document.querySelector("#service-level");
    let html
    
    for (let i = 0; i<5; i++){
        html=(`<input type="radio" name="service" value = "${level.procent[i]}"> ${level.describe[i]} - ${level.procent[i]*100} % <br>`);
        wrapper.innerHTML += html;
    } 
}
renderServiceLevel(level);

//Adding options for number of persons
function renderNumberOfPersons(){
    let wrapper = document.querySelector("#persons-number");
    let html = `<select>`;
    for (let i=1; i<=10; i++){
        html += (`<option value="${i}">${i}</option>`);
        
    }
    html+= `</select>`;
    wrapper.innerHTML += html
}
renderNumberOfPersons();


let billAmount = document.querySelector('#bill-amount');

//verifying whick radio button is selected
let levelSelected = document.querySelector('#service-level')
let serviceLevel;      
        const radioButtons = document.querySelectorAll('input[name="service"]');
        levelSelected.addEventListener("click", () => {
            
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    serviceLevel = radioButton.value;
                    break;
                }
            }
        })

//get the choosen number of persons
let personNumber = document.querySelector('#persons-number');
let numberOfPersons = 1;
personNumber.addEventListener('change', runEvent);
function runEvent(){
    numberOfPersons=event.target.value;
}

//calculate and display the tip
let calculate = document.querySelector('#calculate');
let calc;

calculate.addEventListener('click', function(){
    calc = Math.ceil((Number(billAmount.value)*Number(serviceLevel))/Number(numberOfPersons));
    //console.log(calc);
let c=document.querySelector('#calculator');
c.innerHTML = `${calc}`
})
