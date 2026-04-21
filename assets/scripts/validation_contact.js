const formContact = document.querySelector('form');
const inputEmail = document.getElementById('email');
const feedbackText = document.querySelector('.feedback-span');

const validateEmail = (email) => {
    return validator.isEmail(email);
}

inputEmail.addEventListener('keyup', () => {
    if (!validateEmail(inputEmail.value)) {
        feedbackText.innerHTML = "E-mail format incorrect";
    } else {
        feedbackText.innerHTML = '';
    }
});

formContact.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateEmail(inputEmail.value)){
        formContact.submit();
    }
    else {
        alert("Invalid e-mail");
    }
})

