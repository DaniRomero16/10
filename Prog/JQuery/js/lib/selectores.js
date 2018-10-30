$(function () {

    let rojo = $("#rojo");
    let verde = $("#verde");
    let amarillo = $("#amarillo");
    console.log(rojo);
    rojo.css("background-color", "red");
    verde.css("color", "yellow");
    amarillo.css("font-size", "30px");

})


function Bici() {
    this.ruedas = 2;

    Bici.prototype.quitarRuedas = function () {
        this.ruedas = 0;
    }
}