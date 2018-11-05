function Pelicula(nombre, director, estreno, type) {

    this.nombre = "";
    this.director = "";
    this.estreno = null;
    this.type = "";
    this.prestado = false;


    if (nombre) {
        this.nombre = nombre;
    }

    if (director) {
        this.director = director;
    }
    if (estreno) {
        this.estreno = estreno;
    }
    if (type) {
        this.type = type;
    }

    Pelicula.prototype.setPrestado=function(){
         this.prestado=true;
    }
    Pelicula.prototype.getTitulo=function(){
        return this.nombre;
    }

    Pelicula.prototype.setYear=function(year){
        this.estreno=year;
    }
    Pelicula.prototype.getPelicula=function(){
        return ("Nombre: " +  this.nombre + " Director: " + this.director + " Estreno: " + this.estreno + " Genero" + this.type + " Prestada: "+ this.prestado);
    }


}