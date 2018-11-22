$(() => {

    $('#userid').on('change', function () {
        let user = $(this).val();
        let ObjUl = $('<ul></ul>');
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/albums?userId=' + user,
            success: res => {
                res.forEach(e => {
                    let ObjLi = $('<li></li>');
                    ObjLi.text('ID: '+ e.id + ' User: ' +  e.userId + ' Titulo: ' + e.title);
                    ObjUl.append(ObjLi);
                    ObjUl.addClass('text-primary');
                });
                $('#datos3').append(ObjUl);
            }
        })
    });

    $('#ej2').on('click', function () {
        let ObjUl = $('<ul></ul>');
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos',
            success: res => {
                res.forEach(e => {
                    if (e.completed) {
                        let ObjLi = $('<li></li>');
                        ObjLi.text('ID: '+ e.id + ' User: ' +  e.userId + ' Titulo: ' + e.title);
                        ObjLi.addClass('text-success');
                        ObjUl.append(ObjLi);
                    } else {
                        let ObjLi = $('<li></li>');
                        ObjLi.text('ID: '+ e.id + ' User: ' +  e.userId + ' Titulo: ' + e.title);
                        ObjLi.addClass('text-danger');
                        ObjUl.append(ObjLi);
                    }
                });
                $('#datos2').append(ObjUl);
            }
        })
    });

    $('#ej1').on('click', function () {
        let ObjUl = $('<ul></ul>');
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            success: res => {
                res.forEach(e => {
                    if (e.userId % 2 == 0) {

                        let ObjLi = $('<li></li>');
                        ObjLi.text('ID: '+ e.id + ' User: ' +  e.userId + ' Titulo: ' + e.title);
                        ObjUl.append(ObjLi);

                    }
                });
                $('#datos1').append(ObjUl);
            }
        })
    });

    $('#enviaruser').on('click', () => {
        let email = $('#email').val();
        let password = $('#password').val();
        var usuario = {
            'email': email,
            'password': password
        }
        var usuario2 = {
            'email': email
        }
        $.ajax({
            type: 'POST',
            url: 'https://reqres.in/api/login',
            data: usuario,
            beforeSend: function () {
                alert('Son correctos los datos?');
            },
            success: function (res) {
                console.log(res);
            }
        });
        $.ajax({
            type: 'POST',
            url: 'https://reqres.in/api/login',
            data: usuario2,
            success: res => {
                console.log(res);
            },
            error: res => {
                console.log(res.responseJSON.error);
            }
        });
    });

});
