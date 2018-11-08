function Usuario(nombre, apellidos, sexo, edad, mascotas) {

        this.ide = getRandomInt(0,999999);

    if (nombre)
        this.nombre = nombre;

    if (apellidos)
        this.apellidos = apellidos;

    if (sexo)
        this.sexo = sexo;

    if (edad)
        this.edad = edad;

    if (mascotas)
        this.mascotas = mascotas;

    let fieldsetU = document.createElement("fieldset");
    let leyenda = document.createElement("legend");
    leyenda.innerHTML = "Usuario " + this.ide;
    let parr1 = document.createElement("p");
    let parr2 = document.createElement("p");
    let parr3 = document.createElement("p");
    let parr4 = document.createElement("p");
    let parr5 = document.createElement("p");

    parr1.innerHTML = "Nombre: " + this.nombre;
    parr2.innerHTML = "Apellidos: " + this.apellidos;
    parr3.innerHTML = "Sexo: " + this.sexo;
    parr4.innerHTML = "Edad: " + this.edad;
    parr5.innerHTML = "Mascotas: ";
    mascotas.forEach(element => {
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