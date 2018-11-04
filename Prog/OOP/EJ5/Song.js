function Song(titulo, grupo, duracion, valoracion) {

    this.titulo = null;
    this.grupo = null;
    this.duracion = null;
    this.valoracion = null;

    if (titulo) {
        this.titulo = titulo;
    }
    if (grupo) {
        this.grupo = grupo;
    }
    if (duracion) {
        this.duracion = duracion;
    }
    if (valoracion) {
        this.valoracion = valoracion;
    }

    Song.prototype.print = function(){
        console.log("La canción " + this.titulo + " me encanta y en Apple sólo le dan " + this.valoracion + " estrellas.");
    }

    Song.prototype.getDuracion = function(){
        return this.duracion;
    }

    Song.prototype.getArtista = function(){
        return this.grupo;
    }


}