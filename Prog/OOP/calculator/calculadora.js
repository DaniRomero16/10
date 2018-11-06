$(function () {
    let botones = $("button");
    botones.addClass("btn-large");
    botones.css("font-size", "2rem");
    $("#resultado").css("font-size", "3.3rem");
    $(".container").css("text-align", "center");
    $(".s1").addClass("s2");
    $(".s2").removeClass("s1");

});

function uno() {
    document.getElementById("resultado").value += '1';
}

function dos() {
    document.getElementById("resultado").value += '2';
}

function tres() {
    document.getElementById("resultado").value += '3';
}

function cuatro() {
    document.getElementById("resultado").value += '4';
}

function cero() {
    document.getElementById("resultado").value += '0';
}

function cinco() {
    document.getElementById("resultado").value += '5';
}

function seis() {
    document.getElementById("resultado").value += '6';
}

function siete() {
    document.getElementById("resultado").value += '7';
}

function ocho() {
    document.getElementById("resultado").value += '8';
}

function sumar() {
    document.getElementById("resultado").value += '+';
}

function menos() {
    document.getElementById("resultado").value += '-';
}
function dividir() {
    document.getElementById("resultado").value += '/';
}
function borrar() {
    document.getElementById("resultado").value = '';
}
function mult() {
    document.getElementById("resultado").value += '*';
}
function nueve() {
    document.getElementById("resultado").value += '9';
}
function calcular() {
    let string = document.getElementById("resultado").value;
    let resultado = 0;
    let simbolos = new Array("+", "-", "/", "*");
    let left = "";
    let right = "";
    let symbol = false;
    let operacion = "";
    let parcial = "";
    let right2 = "";
    for (let i = 0; i < string.length; i++) {
        if (simbolos.indexOf(string[i]) != -1) {
            if(symbol){
                parcial = operar(left, right, operacion);
                for (let j = i; j < string.length; j++) {
                    right2 += string[j];
                }
                document.getElementById("resultado").value = parcial +""+ right2;
                calcular();
                return;
            }else{
            symbol = true;
            operacion = string[i];
            }  
        } else if (!symbol) {
            left += string[i];
        } else {
            right += string[i];
        }

    }

    resultado = operar(left, right, operacion);

    document.getElementById("resultado").value = resultado;

    return;

}

function operar(left, right, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = parseFloat(left) + parseFloat(right);
            break;
        case "-":
            resultado = parseFloat(left) - parseFloat(right);
            break;
        case "*":
            resultado = parseFloat(left) * parseFloat(right);
            break;
        case "/":
            resultado = parseFloat(left) / parseFloat(right);
            break;

        default:
            break;
    }

    return resultado;
}
