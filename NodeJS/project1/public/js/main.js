$(function(){

    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');

    $.get('http://localhost:3000/proyectos/get', function(res){
        res.forEach(e => {
            lista.append('<li class="proyecto list-group-item " id="' + e.id + '">' +'<h5>' + e.nombre + '</h5><br>' +
                '<button class="eliminarProyecto btn btn-danger mb-2">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre form-control">' + '</li>');
        });
    });

    boton.on('click', function () {
        let data = $('#insert').serialize();
        $.post('http://localhost:3000/proyectos/add', data , function (proyecto) {
            lista.append('<li class="proyecto list-group-item " id="' + proyecto.id + '">'+'<h5>' + proyecto.nombre + '</h5><br>' +
                '<button class="eliminarProyecto btn btn-danger mb-2">' + 'Eliminar proyecto</button>' +
                '<input type="text" class="nuevoNombre form-control">' + '</li>');
        });
        $('#insert').reset();
    });

    lista.on('click', '.eliminarProyecto', function(){
        let listItem = $(this);
        let id = listItem.parent().attr('id');
        $.post('http://localhost:3000/proyectos/delete', {id : id}, function(res){
            if (res.affectedRows !== 0) {
                listItem.parent().remove();
            }           
        })
    });

    lista.on('change', '.nuevoNombre', function(){
        let listItem = $(this);
        let id = listItem.parent().attr('id');
        let data = {
            id : id,
            name : listItem.val()
        }
        $.post('http://localhost:3000/proyectos/update', data, function(res){
            if (res.affectedRows !== 0) {
                listItem.val('');
                listItem.parent().find('h5').text(res.nombre);
            } else {
                listItem.val('Ha ocurrido un error!');
            }  
        })
    });

})