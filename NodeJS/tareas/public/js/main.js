$(function () {

    $('ul').sortable();
    $('ul').disableSelection();

    $.get('http://localhost:3000/tareas/get', function (res) {
        res.forEach(e => {
            let ObjLi = $('<li></li>');
            let boton = $('<input type="button" class="btn btn-danger btn-sm mx-3 borrarTarea" value="Borrar">');
            let img = $('<img src="' + e.foto + '">')
            img.css('width', '23%');
            ObjLi.text(e.nombre);
            ObjLi.addClass('list-group-item');
            ObjLi.attr('id', e.id);
            ObjLi.append(boton);
            ObjLi.append(img);

            if (e.estado == 'pendiente') {
                $('#pendientes').append(ObjLi);
            } else if (e.estado == 'probar') {
                $('#probar').append(ObjLi);
            } else if (e.estado == 'realizada') {
                $('#realizadas').append(ObjLi);
            };
        });
    });

    $('#anadir').on('click', function () {
        let tarea = $('#inputTarea').val();
        let data = {
            nombre: tarea
        };
        $.post('http://localhost:3000/tareas/add', data, function (res) {
            let ObjLi = $('<li></li>');
            let boton = $('<input type="button" class="btn btn-danger btn-sm mx-3 borrarTarea" value="Borrar">');
            ObjLi.text(res.nombre);
            ObjLi.addClass('list-group-item');
            ObjLi.attr('id', res.id);
            ObjLi.append(boton);
            $('#pendientes').append(ObjLi);
        });
    });


    $('#pendientes').on('click', 'li', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        let data = {
            id: id,
            estado: 'probar'
        };
        $.post('http://localhost:3000/tareas/update', data, function (res) {
            $('#probar').append(tarea);
        });
    });

    $('#probar').on('click', 'li', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        let data = {
            id: id,
            estado: 'realizada'
        };
        $.post('http://localhost:3000/tareas/update', data, function (res) {
            $('#realizadas').append(tarea);
        });
    });

    $('#realizadas').on('click', 'li', function () {
        let tarea = $(this);
        let id = tarea.attr('id');
        let data = {
            id: id,
            estado: 'pendiente'
        };
        $.post('http://localhost:3000/tareas/update', data, function (res) {
            $('#pendientes').append(tarea);
        });
    });

    $('ul').on('click', '.borrarTarea', function () {
        let tarea = $(this).parent();
        let id = tarea.attr('id');
        let data = {
            id: id
        };
        $.post('http://localhost:3000/tareas/delete', data, function (res) {
            if (res.affectedRows !== 0) {
                tarea.remove();
            }
        });
    });

    $('#formulario').on('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData($(this)[0]);
        $.ajax({
            type: 'POST',
            url: '/tareas/addimg',
            data: formulario,
            contentType: false,
            cache: false,
            processData: false,
            success: res => {
                let ObjLi = $('<li></li>');
                let boton = $('<input type="button" class="btn btn-danger btn-sm mx-3 borrarTarea" value="Borrar">');
                let img = $('<img src="' + res.foto + '">')
                img.css('width', '23%');
                ObjLi.text(res.nombre);
                ObjLi.addClass('list-group-item');
                ObjLi.attr('id', res.id);
                ObjLi.append(boton);
                ObjLi.append(img);
                $('#pendientes').append(ObjLi);
            }
        });


    });

});