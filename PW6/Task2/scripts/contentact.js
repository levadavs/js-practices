let vacation = {
    turkey: {
        price: 2000,
        img: "turkey.jpg",
        description: "Турция – государство на юго-востоке Европы и юго-западе Азии, культура которого сочетает" +
            "древнегреческие, персидские, римские, византийские и османские традиции."
    },
    egypt: {
        price: 2500,
        img: "egypt.jpg",
        description: "Египет – страна в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории," +
            "насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил," +
            "среди которых пирамиды Гизы, Большой сфинкс, а также Карнакский храм."
    },
    spain: {
        price: 3000,
        img: "spain.jpg",
        description: "Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании" +
            "разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей" +
            "Прадо,где хранятся произведения европейских мастеров."

    },
    france: {
        price: 3500,
        img: "france.jpg",
        description: "Франция – это страна в Западной Европе, на территории которой находятся средневековые города," +
            "альпийские деревни и пляжи Средиземного моря."

    },
    somali: {
        price: 4000,
        img: "somali.jpg",
        description: "Республика Сомали́ — восточноафриканское государство. В результате гражданской войны и" +
            "деятельности сепаратистов Сомали на долгое время фактически прекратило своё существование и распалось" +
            "на множество частей."

    },
    calc: function (people, days, country) {
        return (people * days * country);
    }
}

/*Cards*/
document.write("<div class='container'>");
for (key in vacation){
    if (typeof vacation[key] === "function")
        continue;
    document.write("<div class='card' style='width: 18rem;'><img src='images/" + vacation[key].img +
        "'class='card-img-top' alt='" + vacation[key].img + "'><div class='card-body'><h5 class='card-title'>" +
        "Цена тура: " + vacation[key].price + " у. е.</h5><p class='card-text'>" + vacation[key].description + "</p>" +
        "<button type='button' class='btn btn-primary btn-choose' data-toggle='modal' data-target='#exampleModal' value='" +
        key.toString() + "'>Выбрать</button></div></div>");
}
/*End cards*/

/*Modal form*/
let modalForm =
    "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>\n" +
    "    <div class='modal-dialog' role='document'>\n" +
    "        <div class='modal-content'>\n" +
    "            <div class='modal-header'>\n" +
    "                <h5 class='modal-title' id='exampleModalLabel'>Калькулятор стоимости тура</h5>\n" +
    "                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\n" +
    "                    <span aria-hidden='true'>&times;</span>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div class='modal-body'>\n" +
    "                <p id='p_direction'></p>\n" +
    "                <form>\n" +
    "                    <div class='form-group'>\n" +
    "                        <label for='people-count' class='col-form-label'>Сколько челвоек:</label>\n" +
    "                        <input type='text' class='form-control' id='people-count' name='peopleCount' placeholder='Введите количество челвоек'>\n" +
    "                    </div>\n" +
    "                    <div class='form-group'>\n" +
    "                        <label for='days-count' class='col-form-label'>Сколько дней:</label>\n" +
    "                        <input type='text' class='form-control' id='days-count' name='daysCount' placeholder='Введите количество дней'>\n" +
    "                    </div>\n" +
    "                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Закрыть</button>\n" +
    "                    <button type='button' class='btn btn-primary' onclick='computePrice(peopleCount, daysCount)'>Рассчитать</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class='modal-footer'>\n" +
    "                <p id='cost'>Стоимость:</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>";
document.write(modalForm);
/*End modal form*/

/*
* Cards button event handler registration
* This function get the value from the value attribute of button element and save it to client side storage.
* It is needed to determine which tour has been chosen.
* */
function setHandlers() {
    let btnChoose = document.getElementsByClassName("btn-choose");
    for (let i = 0; i < btnChoose.length; i++){
        btnChoose[i].onclick = function (e) {
            if (e.target.hasAttribute("value")){
                let value = e.target.getAttribute("value");
                sessionStorage.setItem("country", value);
                document.getElementById("p_direction").innerHTML = "Направление: " + makeCountryName(value);
                document.getElementById("people-count").value = "";
                document.getElementById("days-count").value = "";
                document.getElementById("cost").innerHTML = "Стоимость: ";
            }
        };
        //console.log(sessionStorage.getItem("country"));
    }
}
/*End cards button handler registration*/

function makeCountryName(value) {
    let countryName = "";
    switch (value) {
        case "turkey":
            countryName = "Турция";
            break;
        case "egypt":
            countryName = "Египет";
            break;
        case "spain":
            countryName = "Испания";
            break;
        case "france":
            countryName = "Франция";
            break;
        case "somali":
            countryName = "Сомали";
            break;
    }
    return countryName;
}

function computePrice(peopleCount, daysCount) {
    peopleCount = parseInt(peopleCount.value);
    daysCount = parseInt(daysCount.value);
    let res  = 0;
    if (isNaN(peopleCount) || isNaN(daysCount)){
        document.getElementById("people-count").value = "";
        document.getElementById("days-count").value = "";
        document.getElementById("cost").innerHTML = "Стоимость: ";
        return;
    }else{
        let country = sessionStorage.getItem("country");
        res = vacation.calc(peopleCount, daysCount, vacation[country].price);
        document.getElementById("cost").innerHTML = "Стоимость: " + res + " у. е.";
    }
}
setHandlers();