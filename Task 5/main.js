const ADD = document.querySelector('.add');
const ENTER_WORD = document.querySelector('.enter-word');
const PROHIBITED_WORD = document.querySelector('.prohibited-word');
const RESET = document.querySelector('.reset');
const CENZOR = document.querySelector('.cenzor');
const TEXTAREA = document.querySelector('.textarea');
ADD.addEventListener('click', function () {
    if (ENTER_WORD.value !== '') {
        if (PROHIBITED_WORD.textContent == '') {
            PROHIBITED_WORD.textContent = `${ENTER_WORD.value}`;
        }
        else {
            PROHIBITED_WORD.textContent += `,${ENTER_WORD.value}`;
        }
        ENTER_WORD.value = '';
        ENTER_WORD.placeholder = 'word here..';
        ENTER_WORD.style.border = '1px solid lightgrey';
    }
    else {
        ENTER_WORD.style.border = '1px solid red';
        ENTER_WORD.placeholder = 'Pleace write a word!';
    }
});
RESET.addEventListener('click', function () {
    PROHIBITED_WORD.textContent = '';
});
CENZOR.addEventListener('click', function () {
    if (TEXTAREA.value !== '') {
        const wordsProh = PROHIBITED_WORD.textContent.split(',');
        const wordsTextArea = TEXTAREA.value.split(' ');
        let newString = '';
        for (let i = 0; i < wordsTextArea.length; i++) {
            for (let j = 0; j < wordsProh.length; j++) {
                if (wordsTextArea[i] == wordsProh[j]) {
                    for (let k = 0; k < wordsTextArea[i].length; k++) {
                        newString += '*';
                    }
                    break;
                }
                else {
                    if (j == wordsProh.length - 1) {
                        newString += wordsTextArea[i];
                    }
                }
            }
            newString += ' ';
        }
        TEXTAREA.value = newString;
        TEXTAREA.style.border = '1px solid lightgrey';
        TEXTAREA.placeholder = 'text here..';
    }
    else {
        TEXTAREA.style.border = '1px solid red';
        TEXTAREA.placeholder = 'Pleace write a text!';
    }
});
