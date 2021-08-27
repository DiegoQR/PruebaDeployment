const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");

function greetingGenderSelector(gender){
    if(gender == "Masculino" ){
        var gend = "señor";
    } else {
        var gend = "señora";
    }
    return gend;
}

function greetingHourSelector(){
    var date = new Date();
    var hourNow = date.getHours();
    if(hourNow >= 0 && hourNow < 12){
        var message = "buenos dias";
    }
    else if (hourNow >= 12 && hourNow < 19){
        var message = "buenas tardes";
    }
    else if (hourNow >= 19 && hourNow < 24){
        var message = "buenas noches";
    }

    return message;
}

function greetingSelector(name, age, gender){
    if(age < 25 ){
        var message = greetingHourSelector() + " " + greetingGenderSelector(gender) + " " + name;
    } else {
        var message = "Le deseo " + greetingHourSelector() + "," + " " + greetingGenderSelector(gender) + " " + name;
    }
    return message;
}

form.addEventListener("submit", event => {
    alert(greetingSelector(nombre.value, edad.value, genero.value));
})
