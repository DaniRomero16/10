function registrarDatos(){

    let nombre =document.getElementById("name").value;
    let apellidos =document.getElementById("last_name").value;
 
    console.log("username: "+ username);
 
 
 pintarUsuarios(nombre,apellidos);
 
 }
 
 
 function pintarUsuarios(nombre,apellidos){
 
    document.getElementById("mostrarNombre").innerHTML=nombre;
    document.getElementById("mostrarApellidos").innerHTML=apellidos;
 }

 function pasarADolares(euros) {
     return euros * 1.14;
 }

 function pasarAEuros(dolares) {
     return dolares / 1.14;
 }

 function conversorDolares(){
    let dinero =pasarADolares(document.getElementById("dinero").value);
    document.getElementById("convertido").innerHTML=dinero.toFixed(2) + " $";
    document.getElementById("dinero").value = dinero.toFixed(2) ;
 }

 function conversorEuros(){
    let dinero =pasarAEuros(document.getElementById("dinero").value);
    document.getElementById("convertido").innerHTML=dinero.toFixed(2) + " €";
    document.getElementById("dinero").value = dinero.toFixed(2) ;
 }

