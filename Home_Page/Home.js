const input = document.getElementById('input');
const SendBtn  = document.querySelector('.sendbtn');
const Alert = document.getElementById('alert');
const msg = "email adress required!!";
const text = "Thanks for choosing Us ❤️, you will notifications about the updates!";
const registration = document.querySelector('.registration');

SendBtn.addEventListener('click',verification);
function verification() {
    const value = input.value;
    if(value == "" || value.length > 10) {
        Alert.innerHTML = msg;
    }else {
        const Thanks = document.getElementById('thanks');
        Thanks.innerHTML = text;
        registration.remove();
    }

    setTimeout(function() {
        Alert.textContent = "";
        Alert.classList.remove('hide-alert');
    },1000)
};

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();