$(() => {

    $('#anadir').on('click', function () {
        let tarea = $('#inputTarea').val();
        let ObjLi = $('<li></li>');
        ObjLi.text(tarea);
        ObjLi.addClass('list-group-item');
        $('#pendientes').append(ObjLi);
    });


});
