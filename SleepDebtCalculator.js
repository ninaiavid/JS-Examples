let getSleepHours = (day) => {
    let hoursSlept;
    switch (day) {
        case 'monday':
            hoursSlept=8;
            break;
        case 'tuesday':
            hoursSlept=7;
            break;
        case 'wednesday':
            hoursSlept=6;
            break;
        case 'thursday':
            hoursSlept=7
            break;
        case 'friday':
            hoursSlept=7;
            break;
        case 'saturday':
            hoursSlept=6;
            break;
        case 'sunday':
            hoursSlept=6;
            break;
        }
        return hoursSlept;
}
let getActualSleepHours = ()=>{
    let sum = 
    getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
    return sum;
} 
let getIdealSleepHours = () =>{
    let idealHours=7;
    return idealHours*7;
}
let calculateSleepDebt = () =>{
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours();
    let debt=actualSleepHours-idealSleepHours;
    if (actualSleepHours===idealSleepHours){
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours>idealSleepHours){
        console.log('You slept ' + debt + ' hours more then you need!');
    } else {
        console.log('You should sleep ' + Math.abs(debt) + ' hours more, to get rest!');
    }
}
//console.log(getSleepHours('friday'));
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
calculateSleepDebt();