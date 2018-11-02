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

    }
    Playlist.prototype.getPlay = function () {
        this.songs.forEach(element => {
            console.log(element);
        });
    }

    Playlist.prototype.orderByDuration = function () {
        this.songs = this.songs.sort(comparar);
    }

    function comparar (a, b) {
        if (a.getDuracion() < b.getDuracion()){
            return 1;
        }
        if (a.getDuracion() > b.getDuracion()){
            return -1;
        }
        return 0;
    }
}