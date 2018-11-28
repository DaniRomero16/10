// Definimos el constructor Persona
function Persona(primerNombre) {
    this.primerNombre = primerNombre;
    // Agregamos un par de métodos a Persona.prototype
    Persona.prototype.caminar = function() {
        console.log("Estoy caminando!");
    };
    Persona.prototype.diHola = function(){
        console.log("Hola, Soy" + this.primerNombre);
    };
};



// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call)
    //que "this" se ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);
    //Inicializamos las propiedades específicas de Estudiante
    this.asignatura = asignatura;
    // Reemplazar el método "diHola"
    Estudiante.prototype.diHola = function(){
        console.log("Hola, Soy " + this.primerNombre + ". Estoy estudiando " +
        this.asignatura + ".");
    };
    
    // Agregamos el método "diAdios"
    Estudiante.prototype.diAdios = function() {
        console.log("¡ Adios !");
    };
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Estudiante.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Estudiante.prototype.constructor = Estudiante;



let persona = new Persona("Joaquin");
persona.caminar();
persona.diHola();



// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola(); // muestra "Hola, Soy Carolina. Estoy estudianto Física Aplicada."
estudiante1.caminar(); // muestra "Estoy caminando!"
estudiante1.diAdios(); // muestra "¡ Adios !"


// Comprobamos que las instancias funcionan correctamente
console.log(estudiante1 instanceof Persona); // devuelve true
console.log(estudiante1 instanceof Estudiante); // devuelve true

console.log(persona instanceof Persona); // devuelve true
console.log(persona instanceof Estudiante); // devuelve true


function Profesor(primerNombre,sueldo, asignatura) {
    
    Persona.call(this, primerNombre);

    this.asignatura = asignatura;
    this.sueldo = sueldo;
    // Reemplazar el método "diHola"
    Estudiante.prototype.diHola = function(){
        console.log("Callese alumno por dios");
    };
    
    // Agregamos el método "diAdios"
    Estudiante.prototype.diAdios = function() {
        console.log("¡ Adios !");
    };
};

// Creamos el objeto Profesor.prototype que hereda desde Persona.prototype
Profesor.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Profesor
Profesor.prototype.constructor = Profesor;

