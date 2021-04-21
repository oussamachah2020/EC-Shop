const input = document.querySelectorAll('.input');
const Alert = document.getElementById('Alert');
const SubmitBtn = document.getElementById('btn');
const Thanks = document.getElementById('text');
const msg = 'please enter your informations!';
const text = 'Operations done successefuly!';

SubmitBtn.addEventListener('click',function() {
    input.forEach((one) => {
        if(one.value == "" || one.length > 6) {
            Alert.innerHTML = msg;
        }else {
            Thanks.innerHTML = text;
            one.value = ""
        }

        setTimeout(function() {
            Alert.innerHTML = "";
            Thanks.innerHTML = "";
            payAlert.innerHTML = "";
        },2500);
    })

    const payMethode = document.getElementById('pay-methode');
    const payAlert = document.getElementById('pay');
    const PayValue = Number(payMethode.value);
    if(PayValue == "" || payMethode.value.length < 14) {
        payAlert.innerHTML = `check your card's Numbers`;
    }else {
        payMethode.value = "";
    }
})
