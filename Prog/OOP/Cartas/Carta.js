function Carta(numero, suit) {
    this.numero = null;
    if(numero){
        this.numero = numero;
    }

    this.suit = null;
    if (suit) {
        this.suit = suit;
    }

    this.usada = false;

    Carta.prototype.usarCarta = function(){
        this.usada = true;
    }

    Carta.prototype.barajarCarta = function(){
        this.usada = false;
    }

    Carta.prototype.getUsada = function(){
        return this.usada;
    }

}