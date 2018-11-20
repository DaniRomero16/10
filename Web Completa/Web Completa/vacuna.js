function Vacuna(jVacuna, nombre, fecha) {

    this.nombre = null;
    this.fecha = new Date();

    if (jVacuna) {
        this.nombre = jVacuna.nombre;
        this.fecha = jVacuna.fecha;
    } else {

        if (nombre)
            this.nombre = nombre;

        if (fecha)
            this.fecha = fecha;
    }

    Vacuna.prototype.toJSONObject = function () {

        let jVacuna = {};

        jVacuna.fecha = this.fecha;
        jVacuna.nombre = this.nombre;
        return jVacuna;
    }
}