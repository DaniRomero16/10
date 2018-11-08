function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function toRoll() {
    let numero = getRandomInt(1, 6);
    document.getElementById("dado").src = "Dice_Faces/"+ numero +".png"; 
}