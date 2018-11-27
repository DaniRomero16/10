console.log('Hola Mundo NodeJS');

var params = process.argv.slice(2);
console.log(params);

var numero1 = parseFloat(params[3]);
var numero2 = parseFloat(params[2]);

var plantilla1 = 'La suma es: ' + (numero1 + numero2) + '';
var plantilla2 = 'La multiplicacion es: ' + (numero1 * numero2) + '';
var plantilla3 = 'La resta es: ' + (numero1 - numero2) + '';
var plantilla4 = 'La division es: ' + (numero1 / numero2) + '';

console.log(plantilla1);
console.log(plantilla2);
console.log(plantilla3);
console.log(plantilla4);

