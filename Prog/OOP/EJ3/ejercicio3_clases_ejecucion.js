let videoteca= new Videoteca();



videoteca.modificarYear("Harry Potter y el misterio del príncipe",2015);
console.log(videoteca.getVideoteca());
videoteca.estadoPrestado("Harry Potter y el misterio del príncipe");
console.log(videoteca.getVideoteca());

console.log(videoteca.getPelicula("Harry Potter y el misterio del príncipe"));