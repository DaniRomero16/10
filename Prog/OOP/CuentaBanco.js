function CuentaBanco(dinero, titular) {
    
    this.dinero = 0;
    if (dinero) {
        this.dinero = dinero;
    }

    this.titular = null;
    if (titular) {
        this.titular = titular;
    }

    CuentaBanco.prototype.meterDinero = function (din) {
        this.dinero += din;
    }

    CuentaBanco.prototype.sacarDinero = function (din) {
        this.dinero -= din;
    }

    CuentaBanco.prototype.getSaldo = function () {
        return this.dinero;
    }

    
}