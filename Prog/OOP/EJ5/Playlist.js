function Playlist(jPlaylist, nombre, songs) {

    this.songs = new Array();
    this.nombre = null;

    if (jPlaylist) {
        if (jPlaylist.nombre) {
            this.nombre = jPlaylist.nombre;
        }
        if (jPlaylist.songs) {
            jPlaylist.songs.forEach(element => {
                let song = new Song(element);
                this.songs.push(song);
            });
        }
    } else {
        if (nombre) {
            this.nombre = nombre;
        }

        if (songs) {
            this.songs = songs;
        }
    }


    Playlist.prototype.addSong = function (song) {
        this.songs.push(song);
    }

    Playlist.prototype.getDuration = function () {
        let sum = 0;
        this.songs.forEach(element => {
            sum += element.getDuracion();
        });
        return sum;
    }

    Playlist.prototype.removeSong = function (song) {
        this.songs.splice(this.songs.indexOf(song), 1);
    }

    Playlist.prototype.shuffle = function () {
        this.songs = this.songs.sort(function () { return Math.random() - 0.5 });
    }

    Playlist.prototype.nextSong = function () {
        playing += 1;
        if (playing == this.songs.length) {
            playing = 0;
        }
        return this.songs[playing];
    }

    Playlist.prototype.top = function () {
        let artistas = new Array();
        let artistas2 = {};
        let top = new Array();
        let aux = new Array();
        let aux2 = new Array();

        this.songs.forEach(element => {
            aux.push(element);
            aux2.push(element);
        });

        aux.forEach(element => {
            aux2.forEach(element2 => {
                if (element.getArtista() == element2.getArtista()) {
                    artistas.push(element.getArtista());
                    aux2.splice(aux2.indexOf(element2), 1);
                }
            });
        });

        artistas.forEach(element => {
            artistas2[element] = 0;
        });
        artistas.forEach(element => {
            artistas2[element]++;
        });

        for (let i = 0; i < 5; i++) {
            let mayor = 0;
            for (grupo in artistas2) {
                if (artistas2[grupo] > mayor) {
                    mayor = artistas2[grupo];
                }
            }
            for (grupo in artistas2) {
                if (artistas2[grupo] == mayor && top.length < 5) {
                    top.push(grupo);
                    delete artistas2[grupo];
                }
            }
        }
        return top;
    }

    Playlist.prototype.orderByDuration = function () {
        this.songs.sort(function (a, b) {
            return b.getDuracion() - a.getDuracion();
        });
    }

    Playlist.prototype.orderByGroup = function () {
        this.songs.sort(function (a, b) {
            if (a.grupo < b.grupo) {
                return -1;
            } else if (b.grupo < a.grupo) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    Playlist.prototype.toJSONObject = function () {
        let jPlaylist = {};

        if (this.nombre) {
            jPlaylist.nombre = this.nombre;
        }
        if (this.songs && this.songs.length > 0) {
            let jSongArray = new Array();

            this.songs.forEach(element => {
                jSongArray.push(element.toJSONObject())
            });

            jPlaylist.songs = jSongArray;
        }
        return jPlaylist;
    }
}