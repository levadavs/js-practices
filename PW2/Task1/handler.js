function greeting() {
    let t = document.forms.setTime.elements.time.value;
    t = parseInt(t);
    if (isNaN(t)){
        document.forms.setTime.elements.time.value = "";
        alert("Некорректный ввод");
    }else if (t >= 1 && t <= 17){
        alert("Добрый день");
    }else if (t > 17 && t <= 24){
        alert("Добрый вечер");
    }else{
        document.forms.setTime.elements.time.value = "";
        alert("Что-то не так, попробуйте еще раз");
    }
}