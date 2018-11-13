$(function () {

    var caja = $("#caja");
    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");

    caja.hide();
    ocultar.hide();
    mostrar.show();

    mostrar.on("click", function () {
        caja.show();
        caja.animate({
            left:'200px'
        },'normal').animate({
            left:'0px'
        },'slow');
        ocultar.show();
    })

    ocultar.on("click", function () {
        caja.hide();
        ocultar.hide();
        mostrar.show();
    })


});