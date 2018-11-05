function Videoteca() {

    this.videoteca = new Array();


    this.videoteca.push(new Pelicula("Harry Potter y la piedra filosofal", "Chris Columbus", 2001, "Accion"));
    this.videoteca.push(new Pelicula("Harry Potter y la cámara secreta", "Chris Columbus", 2002, "Accion"));
    this.videoteca.push(new Pelicula("Harry Potter y el prisionero de Azkaban", "Alfonso Cuarón ", 2004, "Accion"));
    this.videoteca.push(new Pelicula("Harry Potter y el cáliz de fuego", "Mike Newell ", 2005, "Accion"));
    this.videoteca.push(new Pelicula("Harry Potter y la Orden del Fénix", "David Yates ", 2007, "Accion"));
    this.videoteca.push(new Pelicula("Harry Potter y el misterio del príncipe", "David Yates ", 2009, "Accion"));


    Videoteca.prototype.modificarYear = function (titulo, year) {
        let encontrado = false;
        let numPeli = 0;

        for (let i=0; i < this.videoteca.length && encontrado == false; i++) {
            if (this.videoteca[i].getTitulo() != titulo) {

            } else {
                encontrado = true;
                numPeli = i;
            }
        }
         this.videoteca[numPeli].setYear(year);
    }
    

    Videoteca.prototype.getVideoteca = function () {
        return this.videoteca;
    }

    Videoteca.prototype.estadoPrestado=function(titulo){
        let encontrado = false;
        let numPeli = null;
        for (let i=0; i < this.videoteca.length && encontrado == false; i++) {
            if (this.videoteca[i].getTitulo() != titulo) {

            } else {
                encontrado = true;
                numPeli = i;
            }
        }
        this.videoteca[numPeli].setPrestado();
    }

    Videoteca.prototype.getPelicula=function(titulo){
        let encontrado = false;
        let numPeli = 0;

        for (let i=0; i < this.videoteca.length && encontrado == false; i++) {
            if (this.videoteca[i].getTitulo() != titulo) {

            } else {
                encontrado = true;
                numPeli = i;
            }
        }
        return this.videoteca[numPeli].getPelicula();
    }

}	
