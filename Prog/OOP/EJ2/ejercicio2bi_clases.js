function Biblioteca() {

    this.biblioteca = new Array();


    this.biblioteca.push(new Libro("Bill Gates", "The Road Ahead"));
    this.biblioteca.push(new Libro("Steve Jobs", "Walter Isaacson"));
    this.biblioteca.push(new Libro("Suzanne Collins", "Mockingjay: The Final Book of The Hunger Games"));

    Biblioteca.prototype.getBiblioteca = function () {
        return this.biblioteca;
    }


    Biblioteca.prototype.setLibro = function (nombre,titulo) {
        return this.biblioteca.push(new Libro(nombre, titulo));
    }

}