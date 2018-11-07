function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function toRoll() {

    let numero = getRandomInt(1, 6);
    switch (numero) {
        case 1:
            document.getElementById("dado").src = "Dice_Faces/1.png";
            break;
        case 2:
            document.getElementById("dado").src = "Dice_Faces/2.png";
            break;
        case 3:
            document.getElementById("dado").src = "Dice_Faces/3.png";
            break;
        case 4:
            document.getElementById("dado").src = "Dice_Faces/4.png";
            break;
        case 5:
            document.getElementById("dado").src = "Dice_Faces/5.png";
            break;
        case 6:
            document.getElementById("dado").src = "Dice_Faces/6.png";
            break;

        default:
            break;
    }

}