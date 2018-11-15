function Usuario(jUsuario, nombre, apellidos, sexo, edad, mascotas) {

    this.mascotas = new Array();
    if (jUsuario) {
        this.ide = jUsuario.ide;
        this.nombre = jUsuario.nombre;
        this.apellidos = jUsuario.apellidos;
        this.sexo = jUsuario.sexo;
        this.edad = jUsuario.edad;
        if (jUsuario.mascotas && jUsuario.mascotas.length > 0) {
            this.mascotas = jUsuario.mascotas;
        }
    } else {
        this.ide = getRandomInt(0, 999999);

        if (nombre)
            this.nombre = nombre;

        if (apellidos)
            this.apellidos = apellidos;

        if (sexo)
            this.sexo = sexo;

        if (edad)
            this.edad = edad;

        if (mascotas && mascotas.length > 0)
            this.mascotas = mascotas;
    }

    Usuario.prototype.toJSONObject = function () {

        let jUsuario = {};

        jUsuario.ide = this.ide;
        jUsuario.nombre = this.nombre;
        jUsuario.apellidos = this.apellidos;
        jUsuario.sexo = this.sexo;
        jUsuario.edad = this.edad;
        if (this.mascotas && this.mascotas.length > 0) {
            jUsuario.mascotas = this.mascotas;
        }
        return jUsuario;
    }
}