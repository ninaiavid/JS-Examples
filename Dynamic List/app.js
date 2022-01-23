//din pacate nu am putut sa incarc fisierul geo.js. Imi spune ca e prea mare...

let countryName;
let idx;

let loadCountriesNames = data => {
    let countriesNames = data.map(e=>e.name);
    // for (let i=0; i<data.length; i++) {
    //     countriesNames.push(data[i].name);
    // }
    return countriesNames;
}

let loadStatesNames = (data, countryName) => {
    let statesNames = [];
    for (let i=0; i<data.length; i++) {
        if (countryName === data[i].name){
            statesNames = data[i].states.map(e=>e.name);
            // for (let j=0; j<data[i].states.length; j++){
            //     statesNames.push(data[i].states[j].name);
            //} 
            idx = i;
            break;  
        }
    }
    return statesNames;
}

let loadCitiesNames = (data, statesName) => {
    let citiesNames = [];
            for (let i=0; i<data[idx].states.length; i++){
                if (statesName === data[idx].states[i].name){
                    citiesNames = data[idx].states[i].cities.map(e=>e.name);
                    // for (let j=0; j<data[idx].states[i].cities.length; j++){
                    //     citiesNames.push(data[idx].states[i].cities[j].name);
                    // } 
                break;  
                }
            } 
    return citiesNames;
}

let countrySelected = () => {
    let countryName = event.target.value;
    let statesNames = loadStatesNames(data, countryName);
    renderStatesList(statesNames);
}

let stateSelected = () => {
    let stateName = event.target.value;
    let citiesNames = loadCitiesNames(data, stateName);
    renderCitiesList(citiesNames);
}

let renderCountriesList = list => {
    let wrapper = document.querySelector("#countries-list");
    let html = `<select onchange="countrySelected()">`;
    list.forEach(cntName => {
        html += `<option>${cntName}</option>`;
    })
    html += `</select>`;
    wrapper.innerHTML = html;    
}

let renderStatesList = list => {
    let wrapper = document.querySelector("#states-list");
    let html = `<select onchange="stateSelected()">`;
    list.forEach(stName => {
        html += `<option>${stName}</option>`
    })
    html += `</select>`;
    wrapper.innerHTML = html;
}

let renderCitiesList = list => {
    let wrapper = document.querySelector("#cities-list");
    let html = `<select>`;
    list.forEach(ctName => {
        html += `<option>${ctName}</option>`
    })
    html += `</select>`;
    wrapper.innerHTML = html;
}

let cntNames = loadCountriesNames(data);
renderCountriesList(cntNames);
