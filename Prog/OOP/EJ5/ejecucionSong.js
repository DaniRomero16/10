let song1 = new Song("Nothing else matters", "Metallica", 5, 4);
let song2 = new Song("Don't stop me now", "Queen", 3, 4);
let song3 = new Song("So Payaso", "Extremoduro", 4, 3);
let song4 = new Song("La luna me sabe a poco", "Marea", 3, 3);
let song5 = new Song("Al cantar", "Platero y tú", 3, 2);

let miPLaylist = new Playlist(new Array(song1, song2, song3, song4, song5));

miPLaylist.getPlay();

miPLaylist.orderByDuration();

miPLaylist.getPlay();