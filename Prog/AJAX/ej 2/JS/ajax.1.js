$(() => {

    $('ul').sortable();
    $('ul').disableSelection();

    $('#anadir').on('click', function () {
        let tarea = $('#inputTarea').val();
        let ObjLi = $('<li></li>');
        ObjLi.text(tarea);
        ObjLi.addClass('list-group-item');
        $('#pendientes').append(ObjLi);
    });

    $('#pendientes').on('click', 'li', function(){       
        $('#probar').append($(this));      
    });
    
    $('#probar').on('click', 'li', function(){       
        $('#realizadas').append($(this));
    });

    $('#realizadas').on('click', 'li', function(){     
        $('#pendientes').append($(this));     
    });

});
