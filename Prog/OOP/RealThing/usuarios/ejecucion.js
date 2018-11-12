var usuarios = new Array();

function crearUsuario() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;
    let sexo;
    if (document.getElementById("hombre").checked)
        sexo = "Hombre";

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
    let usuario = new Usuario(nombre, apellidos, sexo, edad, mascotas);
    usuarios.push(usuario);
    localStorage.setItem("Usuarios", usuarios);
}

function cargar() {
    let usuarios = localStorage.getItem("Usuarios");
    console.log(usuarios);
}