            
let userNameValid = () => {
    let uname=document.forms["registration"]["username"];
    if (uname.value.length<3){
        showError(uname, "#username + .error");
    } else{
        showSuccess(uname, "#username + .error");
        return uname.value;
    }
}

let checkEmail = () => {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let uemail = document.forms["registration"]["email"];
    if (uemail.value.match(mailFormat)){
        showSuccess(uemail, "#email + .error");
        return uemail.value;
    } else {
        showError(uemail, "#email + .error");
    }
}

let passwordValid = () => {
    let upass=document.forms["registration"]["password"];
    if (upass.value.length<6){
        showError(upass, "#password + .error");
    } else{
        showSuccess(upass, "#password + .error");
        return upass.value;
    }
}

let checkPasswordsMach = () =>{
    let upass=passwordValid();
    let cpass=document.forms["registration"]["confirm-password"];
    if(cpass.value!==upass){
        showError(cpass, "#confirm-password + .error");
    } else {
        showSuccess(cpass, "#confirm-password + .error");
    }
}

let showError = (show, selector) => {
    show.style.border = "2px solid red";
    let html = document.querySelector(selector);
    html.style.visibility = "visible";
}

let showSuccess = (show, selector) => {
    show.style.border = "2px solid #2fbe2f";
    let html = document.querySelector(selector);
    html.style.visibility = "hidden";
}

let submit = document.querySelector('#button');
submit.addEventListener('click', function(){
    userNameValid();
    checkEmail();
    passwordValid();
    checkPasswordsMach();
})
