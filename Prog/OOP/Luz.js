function Luz() {

    this.encendido = false;

    Luz.prototype.pulsarInterruptor = function () {
        this.encendido = !this.encendido;
    }

    Luz.prototype.getEstado = function () {
        if (this.encendido) {
            return "Encendido";
        } else {
            return "Apagado";
        }
    }


}

