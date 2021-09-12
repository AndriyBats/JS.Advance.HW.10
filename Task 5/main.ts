const ADD: HTMLButtonElement = document.querySelector('.add');
const ENTER_WORD: HTMLInputElement = document.querySelector('.enter-word');
const PROHIBITED_WORD: HTMLSpanElement = document.querySelector('.prohibited-word');
const RESET: HTMLButtonElement = document.querySelector('.reset');
const CENZOR:  HTMLButtonElement = document.querySelector('.cenzor');
const TEXTAREA: HTMLTextAreaElement = document.querySelector('.textarea');


ADD.addEventListener('click', function(){
    if(ENTER_WORD.value !== ''){
        if(PROHIBITED_WORD.textContent == ''){
            PROHIBITED_WORD.textContent = `${ENTER_WORD.value}`;   
        }else{
            PROHIBITED_WORD.textContent += `,${ENTER_WORD.value}`;
        }
        ENTER_WORD.value = '';
        ENTER_WORD.placeholder = 'word here..';
        ENTER_WORD.style.border = '1px solid lightgrey';
    }else{
        ENTER_WORD.style.border = '1px solid red';
        ENTER_WORD.placeholder = 'Pleace write a word!'
    }
})

RESET.addEventListener('click', function(){
    PROHIBITED_WORD.textContent = '';
})

CENZOR.addEventListener('click', function(){
    if(TEXTAREA.value !== ''){
        const wordsProh: Array<string> = PROHIBITED_WORD.textContent.split(',');
        const wordsTextArea: Array<string> = TEXTAREA.value.split(' ');
        let newString: string = '';
        for(let i=0; i<wordsTextArea.length; i++){
            for(let j=0; j<wordsProh.length; j++){
                if(wordsTextArea[i] == wordsProh[j]){
                    for(let k=0; k<wordsTextArea[i].length; k++){
                        newString += '*';
                    }
                    break
                }else{
                    if(j == wordsProh.length - 1){
                        newString += wordsTextArea[i];
                    } 
                }
            }
            newString += ' ';
        }    
        TEXTAREA.value = newString;        
        TEXTAREA.style.border = '1px solid lightgrey';
        TEXTAREA.placeholder = 'text here..'
    }else{
        TEXTAREA.style.border = '1px solid red';
        TEXTAREA.placeholder = 'Pleace write a text!'
    }
})