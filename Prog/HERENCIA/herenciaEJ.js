// Definimos el constructor Figura
function Figura(nombre) {
    this.nombre = nombre;

    Figura.prototype.getNombre = function () {
        return this.nombre;
    };

};


// Definimos el constructor Circulo
function Circulo(nombre, radio) {

    Figura.call(this, nombre);
    //Inicializamos las propiedades específicas de Circulo
    this.radio = radio;

    Circulo.prototype.getArea = function () {
        return (3.141592 * this.radio * this.radio);
    };


    Circulo.prototype.getPerimetro = function () {
        return (2 * 3.141592 * this.radio);
    };
};

// Creamos el objeto Circulo.prototype que hereda desde Figura.prototype
Circulo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Circulo
Circulo.prototype.constructor = Circulo;

function Rectangulo(nombre, lado1, lado2) {

    Figura.call(this, nombre);
    this.lado1 = lado1;
    if (!lado2) {
        this.lado2 = lado1;
    } else {
        this.lado2 = lado2;
    }

    Rectangulo.prototype.getArea = function () {
        return this.lado1 * this.lado2;
    };

    Rectangulo.prototype.getPerimetro = function () {
        return (2 * this.lado1) + (2 * this.lado2);
    };
};

// Creamos el objeto Rectangulo.prototype que hereda desde Figura.prototype
Rectangulo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Rectangulo
Rectangulo.prototype.constructor = Rectangulo;

function Triangulo(nombre, base, altura) {

    Figura.call(this, nombre);
    this.base = base;
    this.altura = altura;

    Triangulo.prototype.getArea = function () {
        return (this.base * this.altura) / 2;
    };

};

// Creamos el objeto Triangulo.prototype que hereda desde Figura.prototype
Triangulo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Triangulo
Triangulo.prototype.constructor = Triangulo;

let cir = new Circulo('Círculo de 6 de radio', 6);

console.log(cir.getNombre());
console.log(cir.getArea());
console.log(cir.getPerimetro());

let rec = new Rectangulo('Rectángulo de 5 y 8 de lado', 5, 8);

console.log(rec.getNombre());
console.log(rec.getArea());
console.log(rec.getPerimetro());

let tri = new Triangulo('Triángulo de base 4 y altura 2', 4, 2);

console.log(tri.getNombre());
console.log(tri.getArea());