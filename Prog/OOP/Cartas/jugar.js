let baraja = new Baraja();

console.log("Creamos baraja: ");
baraja.getBaraja();


console.log("\nDespués de Barajar: ");
baraja.barajar();
baraja.getBaraja();

let t0 = performance.now();
for (let i = 0; i < 40; i++) {
    baraja.repartirCarta();  
}
    let t1 = performance.now();
    console.log("\nCall to repartirCartas took " + (t1 - t0) + " milliseconds.");


console.log("\nDespués de Repartir todas: ");
baraja.getBaraja();


