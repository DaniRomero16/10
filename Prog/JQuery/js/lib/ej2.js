$(function () {
    let one = $("ul").parent().parent().children().eq(0).children().eq(0);
    one.css("font-size", "1.5em");

    let two = $("#contenedor-parrafos p:last-child").parent().next().children().eq(0).children().eq(4);
    two.css("color", "cyan");

    let three = $("ul li:nth-child(4)").parent().parent().parent().parent().parent().find("body");
    three.css("background-color", "blue");

    let caja = $("#caja");
    caja.on('mouseover', function () {
        $(this).css('background-color', 'red')
    }).on('mouseout', function () {
        $(this).css('background-color', 'white')
    })

    // function cambiarFoto() {
    //     $(this).attr("src", "2.jpg");
    // }

    // function cambiarFoto2() {
    //     $(this).attr("src", "1.jpg");
    // }

    // $("#img").hover(cambiarFoto, cambiarFoto2);

    var img = $('img');
    img.on('mousedown', function(){
        $(this).attr('src', '2.jpg');
    }).on('mouseup',function(){
        $(this).attr('src', '1.jpg');
    });

    $(document).on('mousemove', function(){
        caja.css('left', event.clientX)
            .css('top', event.clientY);
     });
}) 