let song1 = new Song(null, "Nothing Else Matters", "Metallica", 6.28, 4);
let song2 = new Song(null, "Don't stop me now", "Queen", 3.2, 4);
let song3 = new Song(null, "So Payaso", "Extremoduro", 4.5, 3);
let song4 = new Song(null, "La luna me sabe a poco", "Marea", 3, 3);
let song5 = new Song(null, "Al cantar", "Platero y tú", 3, 2);
let song6 = new Song(null, "La vereda de la puerta de atrás", "Extremoduro", 3.5, 2);
let song7 = new Song(null, "Corazón de mimbre", "Marea", 4.1, 3);
let song8 = new Song(null, "La rueca", "Marea", 3.8, 3);
let song9 = new Song(null, "PIENSO EN TU MIRÁ", "Rosalía", 2.8, 4);
let song10 = new Song(null, "DI MI NOMBRE", "Rosalía", 2.4, 3);
let song11 = new Song(null, "Do I wanna know?", "Arctic Monkeys", 3.7, 4);
let song12 = new Song(null, "Fluorescent Adolescent", "Arctic Monkeys", 3.4, 3);
let song13 = new Song(null, "Natural", "Imagine Dragons", 3.09, 4);
let song14 = new Song(null, "Machine", "Imagine Dragons", 3.01, 4);
let song15 = new Song(null, "Zero", "Imagine Dragons", 3.3, 3);
let song16 = new Song(null, "Believer", "Imagine Dragons", 3.24, 4);
let song17 = new Song(null, "Salir", "Extremoduro", 5.18, 3);
let song18 = new Song(null, "BAGDAD", "Rosalía", 3.02, 3);

let songMarta = new Song(null, "Replica", "Sonata Arctica", 5, 2);
let songMarta2 = new Song(null, "full Moon", "Sonata Arctica", 4, 5);
let songMarta3 = new Song(null, "Do I wanna Know?", "Arctic Monkeys", 2, 3);
let songMarta4 = new Song(null, "R U Mine", "Arctic Monkeys", 3, 2);
let songMarta5 = new Song(null, "El ángel caído", "Avalanch", 2, 5);
let songMarta6 = new Song(null, " Antojo de un Dios", "Avalanch", 4, 4);
let songMarta7 = new Song(null, "Perro traidor", "Saratoga", 6, 2);
let songMarta8 = new Song(null, "Tras las rejas", "Saratoga", 5, 2);
let songMarta9 = new Song(null, "Scarlet Rose", "Edguy", 3, 2);

let miPlaylist = new Playlist(null, null, new Array(song1, song2, song3, song4, song5, song6, song7, song8, song9,
    song10, song11, song12, song13, song14, song15, song16, song17, song18, songMarta, songMarta2,
    songMarta3, songMarta4, songMarta5, songMarta6, songMarta7, songMarta8, songMarta9));

// let jPlaylist = JSON.stringify(miPlaylist.toJSONObject());

// let prueba = new Playlist(JSON.parse(jPlaylist));
// console.log(prueba);

printDate(new Date())

function printDate(date) {
    console.log(date.getDate() + " del " + (date.getMonth()+1) + " del " + 
    date.getFullYear() + " a las " + date.getHours() + ":" + date.getMinutes() + 
    ":" + date.getSeconds() + ":" + date.getMilliseconds());
}