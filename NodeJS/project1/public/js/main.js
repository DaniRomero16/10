$(function(){

 

    var boton = $('#enviarInsert');
    var lista = $('#listaProyectos');

    $.get('http://localhost:3000/proyectos/getmongo', function(res){
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
        $.post('http://localhost:3000/proyectos/deletemongo', {id : id}, function(res){
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
            nombre : listItem.val()
        }
        $.post('http://localhost:3000/proyectos/updatemongo', data, function(res){
            if (res.affectedRows !== 0) {
                listItem.val('');
                listItem.parent().find('h5').text(res.nombre);
            } else {
                listItem.val('Ha ocurrido un error!');
            }  
        })
    });

    var registerButton = $('#registerButton');
    var registerForm = $('#registerForm');
    registerButton.on('click', function () {
        let data = registerForm.serialize();
        $.post('/users/register', data, function (res) {
            alert(res.nombre + ' ha sido registrado correctamente');
        });
    });

    var loginButton = $('#loginButton');
    var loginForm = $('#loginForm');
    loginButton.on('click', function () {
        let data = loginForm.serialize();
        $.post('/users/login', data, function (res) {
            console.log(res)
        });
    });

    var logout = $( 'a[href*="logout"]' );
    logout.on('click', function () {
        $.get('/logout', function (res) {
            console.log(res)
        });
    });

})