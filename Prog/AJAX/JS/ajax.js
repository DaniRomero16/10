$(() => {

    let datos = $("#datos");
    $.get("https://reqres.in/api/users", { page: 2 }, res => {
        res.data.forEach(element => {
            datos.append('<p>' + element.first_name + ', '
                + element.last_name + '</p>' + '<img src="'
                + element.avatar + '">');
        });
    });

    let usuario = {
        'name': 'Jose',
        'job': 'developer'
    };

    $.post('https://reqres.in/api/users', usuario, response => {
        console.log(response);
    });

    $('#enviarForm').on('click', () => {
        let name = $('#name').val();
        let job = $('#job').val();
        let usuario = {
            'name': name,
            'job': job
        }
        $.post('https://reqres.in/api/users', usuario, response => {
            console.log(response);
        });
    });
    
    $('#enviaruser').on('click', () => {
        let email = $('#email').val();
        let password = $('#password').val();
        var username = {
            'email': email,
            'password': password
        }
        $.post('https://reqres.in/api/register', username, response => {
            console.log(response);
        });
    });
});

