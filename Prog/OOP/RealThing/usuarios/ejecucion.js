function crearUsuario() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;
    let sexo;
    if (document.getElementById("hombre").checked)
        sexo = "Hombre";

    if (document.getElementById("mujer").checked)
        sexo = "Mujer";

    let edad = document.getElementsByName("edad")[0].value;

    console.log(document.getElementById("mascota1").checked);
    let mascotas = new Array();
    if (document.getElementById("mascota1").checked)
        mascotas.push("Perro");

    if (document.getElementById("mascota2").checked)
        mascotas.push("Gato");

    if (document.getElementById("mascota3").checked)
        mascotas.push("Loro");

    new Usuario(nombre, apellidos, sexo, edad, mascotas);

}