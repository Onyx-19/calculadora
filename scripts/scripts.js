let body = document.querySelector("body")

let operadorA;
let operadorB;
let operacion;

let operation = document.getElementById("operacion")
let resultado = document.getElementById("resultado")
let resValor = document.getElementById("resultado")
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres= document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco= document.getElementById("cinco")
const seis = document.getElementById("seis")
const siete = document.getElementById("siete")
const ocho = document.getElementById("ocho")
const nueve = document.getElementById("nueve")
const cero = document.getElementById("cero")
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multiplicacion = document.getElementById("multiplicacion")
const division = document.getElementById("division")
const punto = document.getElementById("punto")
const eliminar = document.getElementById("reset")
const del = document.getElementById("delete")
const igual = document.getElementById("igual")

const form = document.getElementById("form")

form.addEventListener("click", (e) => {
    e.preventDefault()
    // let resultadoIni = 0.00;
    // resultado.textContent = 0.00
})

// operation = function () {
//     operation.textContent = operadorA + operacion
// }

uno.onclick = function (){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (){
    resultado.textContent = resultado.textContent + "0";
}

suma.onclick = function (){
    operadorA = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (){
    operadorA = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (){
    operadorA = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (){
    operadorA = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (){
    operadorB = resultado.textContent;
    resolver ();
}
eliminar.onclick = function (){
    resetear();
}
punto.onclick = function (){
    resultado.textContent =resultado.textContent + ".";
}
del.onclick = function (){
    borrar();
}



function borrar (){
    resultado.textContent = resultado.textContent.slice(0,-1)
}
function limpiar (){
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operadorA = "";
    operadorB = "";
    operacion = "";
}
function resolver(){
    let result;
    switch (operacion) {
        case "+": 
            result = parseInt (operadorA) + parseInt (operadorB)
            break;
        case "-": 
            result = parseInt (operadorA) - parseInt (operadorB)
        break;
        case "*": 
            result = parseInt (operadorA) * parseInt (operadorB)
        break;
        case "/": 
            result = parseInt (operadorA) / parseInt (operadorB)
            break;
    }
    resetear();
    resultado.textContent = result
}
// operation.textContent = operadorA + operacion
// console.log(operation);



const colorTheme1 = document.querySelector(".themeSel1");
            function cambiaTema1(e){
                if(e.target.checked){
                    document.documentElement.setAttribute('tema', 'theme1');
                    // body.style.background = "rgb(58, 70, 100)"                    
                }
            }
            colorTheme1.addEventListener('change', cambiaTema1);


const colorTheme2 = document.querySelector(".themeSel2");
            function cambiaTema2(e){
                if(e.target.checked){
                    document.documentElement.setAttribute('tema', 'theme2');
                }
            }
            colorTheme2.addEventListener('change', cambiaTema2);


const colorTheme3 = document.querySelector(".themeSel3");
            function cambiaTema3(e){
                if(e.target.checked){
                    document.documentElement.setAttribute('tema', 'theme3');
                }
            }
            colorTheme3.addEventListener('change', cambiaTema3);
