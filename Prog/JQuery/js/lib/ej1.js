$(function () {

 

    $("li").css("font-size", "10px");
    $("#elemento1").css("color", "green");
    let rojo = $(".rojo");
    rojo.removeClass("rojo");
    rojo.addClass("azul");
    $("ul li:nth-child(even)").css("border", "1px solid black");
    $("ul li:nth-child(odd)").css("border", "1px dashed blue");

    $("ul li:nth-child(3)").css("margin-bottom", "30px");

    $('[href="www.google.es"]').css("color", "purple");

    $('[title="Marca"]').css("font-size", "1.8em");


})