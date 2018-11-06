$(function () {
    let one = $("ul").parent().parent().children().eq(0).children().eq(0);
    one.css("font-size","1.5em");

    let two = $("#contenedor-parrafos p:last-child").parent().next().children().eq(0).children().eq(4);
    two.css("color", "cyan");

    let three = $("ul li:nth-child(4)").parent().parent().parent().parent().parent().find("body");
    three.css("background-color", "blue");
})