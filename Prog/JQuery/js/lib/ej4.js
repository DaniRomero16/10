$(function () {
    let casilla = $(".row div");

    casilla.addClass("col").addClass("s2");

    let cont = 0;

    casilla.on('click', function () {
        if ($(this).html() != '<h1>X</h1>' && $(this).html() != '<h1>O</h1>') {
            if (cont % 2 == 0) {
                $(this).html('<h1>X</h1>');
                cont++;
            } else {
                $(this).html('<h1>O</h1>');
                cont++;
            }
        }
    })
})