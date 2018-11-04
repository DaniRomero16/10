function Libro(autor, titulo) {

    this.autor = "";
    this.titulo = "";

    if (autor) {
        this.autor = autor;
    }
    if (titulo) {
        this.titulo = titulo;
    }

    Libro.prototype.getLibro = function () {
        return ("Autor: " + this.autor + " - titulo " + this.titulo);
    }

}