$(function () {

    var add_enlaces = $('#add_button');
    var add_text = $('#add_text');
    var menu = $('#menu_enlaces');
    reloadLinks();

    add_enlaces.on('click', function () {
        let nuevo_enlace = add_text.val();
        menu.append('<li><a href="' + nuevo_enlace + '"></a></li>');
        reloadLinks();
    });

    function reloadLinks() {
        let enlaces = $('a');
        enlaces.each(function () {
            let enlace = $(this);
            let texto_enlace = enlace.attr('href');
            enlace.text(texto_enlace);
        });
    };

    


});