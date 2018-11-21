//-------LET---------
if (true) {
    var uno = "1";
    let dos = "2";
}
document.write("uno = " + uno);
//document.write("dos = " + dos)
document.write("<br>");
document.write("<br>");
//------CONSTANTES-----
// no se puede cambiar el valor de una constante
// siempre se definen en mayusculas y no acepta camel kase, por lo cual usaremos snake kase, que sera para separar palabras con un guion bajo
// Ej const NUMERO_PI = 3.141592;
const PI = 3.141592;
//PI = 8;
document.write("typeof true: " + typeof true);
document.write("<br>");
document.write("<br>");
document.write("typeof 3.14: " + typeof 3.14);
document.write("<br>");
document.write("<br>");
document.write("typeof string: " + typeof "String");
document.write("<br>");
document.write("<br>");
document.write("typeof Symbol(): " + typeof Symbol());
document.write("<br>");
document.write("<br>");
document.write("typeof {a:1}: " + typeof { a: 1 }); // a:1 es un array asociativo
document.write("<br>");
document.write("<br>");
document.write("typeof [1,2,3]: " + typeof [1, 2, 3]);
document.write("<br>");
document.write("<br>");
document.write("typeof undefined: " + typeof undefined);
document.write("<br>");
document.write("<br>");
document.write("typeof null: " + typeof null);
document.write("<br>");
document.write("<br>");
//-----TEMPLATE LITERALS---------
let fName = "Manolo";
let lName = "Perez";
document.write(`${fName} ${lName}`);
document.write("<br>");
document.write("<br>");
document.write("${fName} ${lName}");
document.write("<br>");
document.write("<br>");
document.write('${fName} ${lName}');
document.write("<br>");
document.write("<br>");
let num1 = 10;
let num2 = 5;
document.write("num1 + num2 = ${num1} + ${num2}");
document.write("<br>");
document.write("<br>");
document.write(`num1 + num2 = ${num1} + ${num2}`);
document.write("<br>");
document.write("<br>");
//---------FUNCIONES USANDO TEMPLATES LITERALS----------
function matematicar(operacion, ...valores) {
    if (operacion[0] == 'Suma') {
        let sumatorio = 0;
        for (let i = 0; i < valores.length; i++) {
            sumatorio += valores[i]
        }
        document.write(`resultado de la suma: ${sumatorio} `);
        document.write("<br>");
        document.write("<br>");
    }
    else if (operacion[0] == 'Multiplicar') {
        document.write(`${valores[0]} * ${valores[1]} = ${valores[0] * valores[1]} <br>`);
        document.write("<br>");
        document.write("<br>");
    }
}
matematicar`Suma${10} ${20} ${30} ${40}`;
matematicar`Multiplicar${10} ${10}`;
//------ITERAR SOBRE UN STRING CON TEMPLATE LITERALS-----
let nombre = "Manolo";
for (let c of nombre) {
    document.write(`${c} <br>`);
    document.write("<br>");
}
//-----------STRING-----------
let hola = "Hola ";
//--------REPEAT-----------
document.write(hola.repeat(3));
document.write("<br>");
document.write("<br>");
//-------starsWith-------
document.write(hola.startsWith("Ho"));
document.write("<br>");
document.write(hola.startsWith("ola"));
document.write("<br>");
document.write("<br>");
//-----evaluar starsWith------
if (hola.startsWith("Ho")) {
    document.write("sep");
    document.write("<br>");
    document.write("<br>");
}
else {
    document.write("nop");
    document.write("<br>");
    document.write("<br>");
}
//-------endsWith-------
document.write(hola.endsWith("Ho"));
document.write("<br>");
document.write("<br>");
//----incluides-----------
document.write(hola.includes("ol"));
document.write("<br>");
document.write("<br>");
// strings en multiples lineas
// hasta ahora:
let datos = "esto es un \
string dividido en \
varias lineas";
document.write(datos);
document.write("<br>");
document.write("<br>");
//ahora:
let datosv2 = `esto es un
string dividido en
varias lineas.
lineas v2`
document.write(`${datosv2}`);
document.write("<br>");
document.write("<br>");
//es lo mismo:
document.write(datosv2);
document.write("<br>");
document.write("<br>");
//ARRAYS
//otra forma de crear Arrays, sin usar el constructor
let array1 = Array.of(1, 2, 3);
console.log(array1)
//crear un objeto 
let array2 = Array.from("world")
console.log(array2);
//manipular valores usando Array.from()
let array3 = Array.from(array1, (value) => value * 2);
console.log(array3)
//iterar sobre los valores del Array
for (let val of array3) {
    document.write(`Array valor: ${val}`);
    document.write("<br>");
    document.write("<br>");
}
//------FUNCTIONS-------
function suma(num1 = 1, num2 = 1){
    document.write(`${num1} + ${num2} = $ {num1 + num2} <br>`);
    document.write("<br>");
    document.write(`${arguments[0]} + ${arguments[1]} <br>`);
    document.write("<br>");
}
suma(3);
suma(3,4);
function sumar(...valores){
    let sumatorio = 0;
    for(let i = 0; i < valores.length; i++){
        sumatorio += valores[i];
    }
    document.write(`La suma es ${sumatorio} <br>`);
}
sumar(1,2,3,4,5,6,7)
let numeros = new Array(1,2,3,4,5);
//sumar(numeros)