function Altavoz(encendido, volumen) {

    this.encendido = false;
    this.volumen = 0;

    if (encendido) {
        this.encendido = encendido;
    }

    if (volumen) {
        this.volumen = volumen;
    }


    Altavoz.prototype.encender = function () {
        this.encendido = true;
        this.volumen = 20;

    }

    Altavoz.prototype.apagar = function () {
        this.encendido = false;
        this.volumen = 0;

    }

    Altavoz.prototype.getVolumen = function () {

        return this.volumen;

    }

    Altavoz.prototype.subirVolumen = function () {
        if (this.volumen < 100) {
            this.volumen += 1;
        }
    }

    Altavoz.prototype.bajarVolumen = function () {
        if (this.volumen > 0) {
            this.volumen -= 1;
        }
    }

    Altavoz.prototype.establecerVolumen = function (numero) {
        if (numero >= 0 && numero <= 100) {
            this.volumen = numero;
        }
    }

    Altavoz.prototype.mute = function () {
        this.volumen = 0;

    }

    Altavoz.prototype.print = function(){
        console.log("El altavoz está " + this.encendido + " y su volumen es de " + this.volumen);
    }

}