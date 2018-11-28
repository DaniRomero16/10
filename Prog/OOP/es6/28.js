// ----------- SETS ------------

let conjunto = new Set();
conjunto.add(10);
conjunto.add('Word');

console.log(`Contiene 10: ${conjunto.has(10)}`);
console.log(`Contiene Word: ${conjunto.has('Word')}`);

//tamaño
console.log(conjunto.size);

//eliminar
conjunto.delete(10);
console.log(conjunto);

//iterar
conjunto.add(28);
conjunto.add('Messi');
for (let val of conjunto) {
    console.log(val);
}

// ------------- MAPS -----------

//coleccion de pares clave-valor

let mapa = new Map();

mapa.set('k1', 'Una Cadena');
mapa.set('k2', 10);

console.log(`key1: ${mapa.get('k1')}`);
console.log(`key2: ${mapa.get('k2')}`);

//Tamaño
console.log(`Tamaño: ${mapa.size}`);

//Iterar
mapa.forEach(function (value, key) {
    console.log(`${key}: ${value}`);
}  
);

// ------------- SYMBOLS -----------

let capital = Symbol('Capital del País');
let galicia = {};
galicia[capital] = 'Orense';
console.log(`Symbol capital de Galicia: ${galicia[capital]}`);
console.log(`Symbol descripcion: ${capital.toString()}`);

let nombreEmpleado = Symbol.for('Nombre Empleado');
let manoloPerez = {};
manoloPerez[nombreEmpleado] = 'Manolo';

let joaquinRodriguez = {};
joaquinRodriguez[nombreEmpleado] = 'Joaco';

console.log(`Manolete: ${manoloPerez[nombreEmpleado]}`);
console.log(`Joaquinito: ${joaquinRodriguez[nombreEmpleado]}`);


// ------------- PROMISES -----------

//codigo que se va a ejecutar mas tarde
// dos casos: o funcionan bien o fallan
//pueden ser fullfilles, rejected, pending, o settled

//se maneja inmediatamente
let p1 = Promise.resolve('Resuelveme!');

//recibe dos argumentos:
// - la funcion callback de exito y la de fallo

p1.then((res) => console.log(`${res}`))

//una promise que se ejecuta despues de 2 segundos
let p2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve('Resuélveme'), 2000);
});

p2.then ((res) => console.log(`${res}`));

let valorAlea = 18;

let p3 = new Promise(function(resolve, reject){
    if (valorAlea==6) {
        resolve('todo ok');
    } else {
        resolve('subnormal');
    }
});

p3.then(
    (val) => console.log(`${val}`),
    (err) => console.log(`${err}`)
)