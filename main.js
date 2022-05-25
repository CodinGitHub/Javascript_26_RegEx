let email = 'example@gmail.com';

// Tiene el signo @ ?
// Tiene espacios?
// Tiene \

let regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let emailError = regExp.test(email);

console.log(emailError)