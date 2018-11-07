$(function () {
    let botones = $("button");
    botones.addClass("btn-large");
    botones.css("font-size", "2rem");
    $("#resultado").css("font-size", "3.3rem");
    $(".container").css("text-align", "center");
    $(".s1").addClass("s2");
    $(".s2").removeClass("s1");

});

function addData(valor) {
    document.getElementById("resultado").value += valor;
}

function borrar() {
    document.getElementById("resultado").value = '';
}

function operar2() {
    document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
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
            if (symbol) {
                parcial = operar(left, right, operacion);
                for (let j = i; j < string.length; j++) {
                    right2 += string[j];
                }
                document.getElementById("resultado").value = parcial + "" + right2;
                calcular();
                return;
            } else {
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
    let resultado = 0;

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
