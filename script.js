const buttons = document.getElementsByTagName('button');
const sendBth = document.querySelector('[type="submit"]');
const changeBth = document.getElementsByClassName('button-contact')[1];
const fields = document.querySelectorAll('input, textarea');
const zip = document.querySelector('[name="zip"]');
const main = document.getElementById('output');
const anotherFields = document.getElementsByTagName('output');
const form = document.getElementsByClassName('contentform')[0];


function onlyNumbers() {
    this.onkeypress = function (e) {
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (event.keyCode < 47 || event.keyCode > 58) {
            event.preventDefault()
        }
    }
}



function btnColor() {
    let count = 0;
    for (const field of fields) {
        if (field.value) {
            count++;
        }
    }

    if (count === fields.length) {
        sendBth.disabled = false;
    } else {
        sendBth.disabled = true;
    }
}


zip.addEventListener('focus', onlyNumbers)

for (let field of fields) {
    field.addEventListener('input', btnColor)
}


function nextForm(event) {
    event.preventDefault();
    form.classList.add('hidden');
    form.removeAttribute('novalidate');
    main.classList.remove('hidden');

    for (const fieldOne of fields) {
        for (const fieldTwo of anotherFields) {
            if (fieldOne.name === fieldTwo.id) {
                fieldTwo.value = fieldOne.value;
            }
        }
    }
}

function formFoSend() {
    form.classList.remove('hidden');
    main.classList.add('hidden');
}

sendBth.addEventListener('click', nextForm)
changeBth.addEventListener('click', formFoSend)




