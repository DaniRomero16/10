function Playlist(songs) {

    this.songs = new Array();

    if (songs) {
        this.songs = songs;
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
        return this.songs.sort(function () { return Math.random() - 0.5 });
    }

    Playlist.prototype.nextSong = function (shuffled) {
        if (shuffled) {
            return shuffled[0];
        }
        return this.songs[0];
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
        return this.songs.sort(function (a, b) {
            return b.getDuracion() - a.getDuracion();
        });
    }


}