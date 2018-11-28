$(function(){

    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');

    boton.on('click', function () {
        let data = $('#insert').serialize();
        $.post('http://localhost:3000/proyectos/add', data , function (proyecto) {
            lista.append('<li class="proyecto" id="' + proyecto.id + '">' + proyecto.nombre +
                '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre">' + '</li>');
        });
    });

})