let nombre = prompt("Ingrese su nombre:")

class Servicios {
    constructor(id, name, price) {
        this.id = id
        this.name = name
        this.price = parseFloat(price)
    }
}

const services = [];

services.push = (new Servicios(100, "traducción", 10));
services.push = (new Servicios(200, "transcripción", 200));
services.push = (new Servicios(300, "subtitulado", 220));


let servicio = parseInt(prompt("¡Bienvenid@, "+nombre +"! Ingrese por favor el código del servicio a solicitar (100 para traducciones, 200 para transcripciones y 300 para subtitulados):"))

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}


let palabras = parseInt(prompt("Indique por favor la cantidad aproximada de palabras a traducir:"));

let resultado = calculadora(palabras, Servicios.price, "*");

alert("El presupuesto aproximado sería de " + resultado + " pesos.")

if (servicio === Servicios.id) {
    resultado
}else {
    prompt("Código incorrecto. Intente nuevamente por favor (100 para traducciones, 200 para transcripciones y 300 para subtitulados):")
}



console.log(resultado)


//creamos el boton
const btnNucleo = document.createElement("button");


//asignamos el ID
btnNucleo.id = "btnNucleo";


//asignar el contenido del boton
btnNucleo.innerHTML = "ENVIAR CONSULTA"

//escuchar el evento click
btnNucleo.addEventListener("click", function(){
    const h3 = document.createElement("h3");
    h3.innerHTML = "En breve resonderemos. Gracias!";
    document.body.contacto.appendChild(h3);
})


console.log(btnNucleo);


//agregamos boton al DOM
document.body.contacto.appendChild(btnNucleo)