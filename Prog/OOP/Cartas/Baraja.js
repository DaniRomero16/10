function Baraja() {
    
    this.cartas = new Array();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            
            switch (j) {
                case 0:
                    this.cartas.push(new Carta((i + 1), "Hearts"));
                    break;
                case 1:
                    this.cartas.push(new Carta((i + 1), "Spades"));
                    break;
                case 2:
                    this.cartas.push(new Carta((i + 1), "Diamonds"));
                    break;
                case 3:
                    this.cartas.push(new Carta((i + 1), "Clubs"));
                    break;

                default:
                    break;
            }

        }

    }

    Baraja.prototype.barajar = function () {
        this.cartas = this.cartas.sort(function () { return Math.random() - 0.5 });
    }

    Baraja.prototype.getBaraja = function () {
        this.cartas.forEach(element => {
            console.log(element);
        });
    }


    Baraja.prototype.verBaraja = function () {
        console.log(this.cartas);
    }

    Baraja.prototype.repartirCarta = function () {
        let copia = new Array();

        this.cartas.forEach(element => {
            if (!element.getUsada()) {
                copia.push(element);
            } 
        });

        copia[getRandomInt(0, copia.length)].usarCarta();

    }

   
    
}