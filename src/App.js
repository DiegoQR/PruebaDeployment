const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");

function greetingGenderSelector(name, gender){
    if(gender == "Masculino" ){
        var gend = "señor";
    } else {
        var gend = "señora";
    }
    return gend;
}

function greetingSelector(name, age, gender){
    if(age < 25 ){
        var message = "Buenos dias" + " " + greetingGenderSelector(name,gender) + " " + name;
    } else {
        var message = "Le deseo buenos dias," + " " + greetingGenderSelector(name,gender) + " " + nombre.value;
    }
    return message;
}

form.addEventListener("submit", event => {
    alert(greetingSelector(nombre.value, edad.value, genero.value));
})
