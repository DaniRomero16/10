
function crearUsuario() {

    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;

    let sexo = "Hombre";
    if (document.getElementById("mujer").checked)
        sexo = "Mujer";

    let edad = document.getElementsByName("edad")[0].value;

    let mascotas = new Array();
    if (document.getElementById("mascota1").checked)
        mascotas.push("Perro");

    if (document.getElementById("mascota2").checked)
        mascotas.push("Gato");

    if (document.getElementById("mascota3").checked)
        mascotas.push("Loro");

    let usuario = new Usuario(null, nombre, apellidos, sexo, edad, mascotas);

    //enviar al server
    //esperar respuesta
    //almacenar en session
    guardarUsuario(usuario);
    document.getElementById("myform").reset();
    //pintar
    cargar();

}

function cargar() {

    let usuarios = StorageManager.getUsers();

    let myNode = document.getElementById("usuarios");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    usuarios.forEach(e => {
        printUsuario(e);
    });
}

function guardarUsuario(user) {
    StorageManager.saveUser(user);
}

function printUsuario(usuario) {

    let fieldsetU = document.createElement("fieldset");
    let leyenda = document.createElement("legend");
    leyenda.innerHTML = "Usuario " + usuario.ide;
    let parr1 = document.createElement("p");
    let parr2 = document.createElement("p");
    let parr3 = document.createElement("p");
    let parr4 = document.createElement("p");
    let parr5 = document.createElement("p");

    parr1.innerHTML = "Nombre: " + usuario.nombre;
    parr2.innerHTML = "Apellidos: " + usuario.apellidos;
    parr3.innerHTML = "Sexo: " + usuario.sexo;
    parr4.innerHTML = "Edad: " + usuario.edad;
    parr5.innerHTML = "Mascotas: ";
    usuario.mascotas.forEach(element => {
        parr5.innerHTML += element + " ";
    });

    fieldsetU.appendChild(leyenda);
    fieldsetU.appendChild(parr1);
    fieldsetU.appendChild(parr2);
    fieldsetU.appendChild(parr3);
    fieldsetU.appendChild(parr4);
    fieldsetU.appendChild(parr5);

    document.getElementById("usuarios").appendChild(fieldsetU);
}