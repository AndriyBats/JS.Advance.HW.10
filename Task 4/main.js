const getSqrt = (number) => {
    if (number == null) {
        return console.log('Будь ласка, введіть число');
    }
    else if (typeof number !== 'number') {
        return console.log('Повинно бути числове значення');
    }
    else if (number < 0) {
        return console.log('Введіть додатнє число');
    }
    else {
        return console.log(Math.sqrt(number));
    }
};
getSqrt();
getSqrt('string');
getSqrt(-9);
getSqrt(9);
getSqrt(0.984);
