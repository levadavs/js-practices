function authorization() {
    let userName = document.forms.authForm.elements.userName.value;
    let userPass = document.forms.authForm.elements.userPass.value;
    if (userName === "ivan" && userPass === "333")
        alert("Добро пожаловать, " + userName);
    else if (userName === "ssss" && userPass === "666")
        alert("Добро пожаловать, " + userName);
    else if (userName === "gibs" && userPass === "0000")
        alert("Добро пожаловать, " + userName);
    else
        alert("Пользователь не найден");
}