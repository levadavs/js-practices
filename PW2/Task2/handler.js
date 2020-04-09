function authorization() {
    let userName = document.forms.setName.elements.name.value;
    if (userName == "Jonh")
        alert("Привет, " + userName);
    else if (userName == "")
        alert("Вы не ввели имя");
    else
        alert("Я вас не знаю");
}