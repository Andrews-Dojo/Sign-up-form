let pass1 = document.getElementById('password');
let pass2 = document.getElementById('confirm_password');
let message = document.getElementById('message');

let submit = document.querySelector('form');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    if(pass1.value == pass2.value){
        alert('You submitted the fake form');
    } else {
        alert('Passwords must match in order to submit the form');
    }
    
})


function checkPassword() {
  if(pass1.value.length === 0 )  {
    message.textContent = '';
  } else if(pass1.value == pass2.value) {
    message.style.color = 'green';
    message.textContent = 'Passwords Match'
} else {
    message.style.color = 'red';
    message.textContent = '*Passwords do not match'
}

}

pass1.addEventListener('keyup', () => {
    if(pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);
