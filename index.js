let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btnSubmit = document.getElementById('submit');

let p_name= document.getElementById('warning-firstName');
let p_nameL = document.getElementById('warning-lastName');
let p_email = document.getElementById('warning-emails');
let p_password = document.getElementById('warning-password');

let form = document.getElementById('form');

let pWarning = document.getElementById('warning');

form.addEventListener('submit', e => {
    e.preventDefault();
    p_name.innerHTML = '';
    p_nameL.innerHTML = '';
    p_email.innerHTML = '';
    p_password.innerHTML = '';
    let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(firstName.value.length < 3) {
        p_name.innerHTML = 'First Name cannot be empty'
        firstName.dataset.warning = 'on';
    } else {
        firstName.dataset.warning = 'off';
    }
    if(lastName.value.length < 3) {
        p_nameL.innerHTML = 'Last Name cannot be empty'
        lastName.dataset.warning = 'on';
    } else {
        lastName.dataset.warning = 'off';
    }
    if(!expresion.test(email.value)) {
        p_email.innerHTML = 'Looks like this is not an email'
        email.dataset.warning = 'on';
    } else {
        email.dataset.warning = 'off';
    }
    if(password.value.length < 2) {
        p_password.innerHTML = 'Password cannot be empty'
        password.dataset.warning = 'on';
    } else {
        password.dataset.warning = 'off';
    }

    
})