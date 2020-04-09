function plus() {
    let num1, num2, result;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (isNaN(num1) || isNaN(num2)){
        reset();
        alert("Некорректный ввод");
    }else{
        result = num1 + num2;
        document.getElementById("result").innerHTML = "Результат: " + result;
    }

}
function minus() {
    let num1, num2, result;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (isNaN(num1) || isNaN(num2)){
        reset();
        alert("Некорректный ввод");
    }else{
        result = num1 - num2;
        document.getElementById("result").innerHTML = "Результат: " + result;
    }
}
function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "Результат: ";
}