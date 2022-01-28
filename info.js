
const input = document.querySelector('#encryptor_input');
const output = document.querySelector('#encrypted__text');
const encryptBtn = document.querySelector('#encrypt');
const dencryptBtn = document.querySelector('#decrypt');
const copyBtn = document.querySelector('#copy');
const defaultImage = document.querySelector('.messages img');
const defaultText = document.querySelector('.messages .messages__text');
const containerCopy = document.querySelector('.messages__encrypted');

encryptBtn.addEventListener('click', encrypt);
dencryptBtn.addEventListener('click', decrypt);
copyBtn.addEventListener('click', copy);

function encrypt() {
    let inputValue = input.value;
    const notAllowed = validateText(inputValue);

    if (notAllowed == true || inputValue == "") {
        alert("Only lowercase letters and no accents");
    } else {
        let encryptValue = inputValue.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        
        showText(encryptValue);
    }
}

function decrypt() {
    let inputValue = input.value;
    const notAllowed = validateText(inputValue);

    if (notAllowed == true || inputValue == "") {
        alert("Only lowercase letters and no accents");
    } else {
        let encryptValue = inputValue.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
        
        showText(encryptValue);
    }
}

function copy() {
    output.select();
    document.execCommand("copy");
    reset();
}

function hideDefaultMessage() {
    defaultImage.classList.add('display--none');
    defaultText.classList.add('display--none');
}

function reset() {
    containerCopy.classList.add('display--none');
    defaultImage.classList.remove('display--none');
    defaultText.classList.remove('display--none');
    output.textContent = '';
    input.value = '';
}

function validateText(inputValue) {
    let regex = /[^a-z0-9\s]/;
    return regex.test(inputValue);
}

function showText(text) {
    hideDefaultMessage();
    output.textContent = text;
    containerCopy.classList.remove('display--none');
}
