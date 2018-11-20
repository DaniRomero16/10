function Mascota(jMascota, nombre, chip_id, vacunas) {

    this.nombre = null;
    this.chip_id = null;
    this.vacunas = new Array();
    if (jMascota) {
        this.nombre = jMascota.nombre;
        this.chip_id = jMascota.chip_id;
        if (jMascota.vacunas && jMascota.vacunas.length > 0) {
            this.vacunas = jMascota.vacunas;
        }
    } else {

        if (nombre)
            this.nombre = nombre;

        if (chip_id)
            this.chip_id = chip_id;

        if (vacunas && vacunas.length > 0)
            this.vacunas = vacunas;
    }

    Mascota.prototype.toJSONObject = function () {

        let jMascota = {};
        jMascota.nombre = this.nombre;
        jMascota.chip_id = this.chip_id;
        if (this.vacunas && this.vacunas.length > 0) {
            jMascota.vacunas = this.vacunas;
        }
        return jMascota;
    }
}