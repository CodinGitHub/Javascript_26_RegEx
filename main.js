let emailElement = document.getElementById('email');
let emailError = document.getElementById('email-error');
let passElement = document.getElementById('pass');
let showCheck = document.getElementById('show');
let button = document.getElementById('submit');
let passError = document.getElementById('pass-error');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(emailElement.value, emailError);
    validatePass(passElement.value, passError); 
});

function validateEmail(email, divError){
    let regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExpEmail.test(email) == true){
        divError.style.visibility = 'hidden';
    }else{
        divError.style.visibility = 'visible';
    }
}

function validatePass(password, divError){
    let regExpPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;

    if(regExpPass.test(password) == true){
        divError.style.visibility = 'hidden';
    }else{
        divError.style.visibility = 'visible';
    }
}

showCheck.addEventListener('click', (event)=>{
    if (event.target.checked == true){
        passElement.type = 'text';
    }else{
        passElement.type = 'password';
    }
});