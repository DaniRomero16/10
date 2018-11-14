function Song(jSong, titulo, grupo, duracion, valoracion) {

    this.titulo = null;
    this.grupo = null;
    this.duracion = null;
    this.valoracion = null;
    
    if (jSong) {
        this.titulo = jSong.titulo;
        this.grupo = jSong.grupo;
        this.duracion = jSong.duracion;
        this.valoracion = jSong.valoracion;
    } else {
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
    }

    Song.prototype.print = function () {
        console.log("La canción " + this.titulo + " me encanta y en Apple sólo le dan " + this.valoracion + " estrellas.");
    }

    Song.prototype.getDuracion = function () {
        return this.duracion;
    }

    Song.prototype.getArtista = function () {
        return this.grupo;
    }

    Song.prototype.toJSONObject = function () {
        let jSong = {};

        jSong.titulo = this.titulo;
        jSong.grupo = this.grupo;
        jSong.duracion = this.duracion;
        jSong.valoracion = this.valoracion;

        return jSong;

    }
}