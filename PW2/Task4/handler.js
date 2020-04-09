function showMax() {
    let max = 0;
    let digit1 = document.forms.setDigits.elements.digit1.value;
    let digit2 = document.forms.setDigits.elements.digit2.value;
    let digit3 = document.forms.setDigits.elements.digit3.value;
    digit1 = parseInt(digit1);
    digit2 = parseInt(digit2);
    digit3 = parseInt(digit3);
    if (isNaN(digit1) || isNaN(digit2) || isNaN(digit3)){
        document.forms.setDigits.elements.digit1.value = "";
        document.forms.setDigits.elements.digit2.value = "";
        document.forms.setDigits.elements.digit3.value = "";
        alert("Некорректный ввод");
    }else if (digit1 == digit2 && digit1 == digit3){
        alert("Все числа равны");
    }else{
        let digits = [digit1, digit2, digit3];
        max = digits[0];
        for (let i = 0; i < digits.length - 1; i++){
            if (digits[i + 1] > max)
                max = digits[i + 1];
        }
        //console.log(digits);
        alert("Максимальное число равно: " + max);
    }
}