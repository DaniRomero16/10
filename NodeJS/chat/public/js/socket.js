var socket = io.connect('http://192.168.100.2:3000', { forceNew: true });

socket.on('mensajes', function (data) {
    render(data);
});

function render(data) {
    var html = data.map(function (mensaje, index) {
        return (
            `<div class = "mensaje">
                <strong>${mensaje.nickname}:</strong>
                <p>${mensaje.text}</p>
             </div>`
        )
    });

    document.getElementById('mensajes').innerHTML = html;
    divMensajes = document.getElementById('mensajes');
    divMensajes.innerHTML = html;
    divMensajes.scrollTop = divMensajes.scrollHeight;
}



function addMessage(e){
    let mensaje = {
        nickname: document.getElementById('nickname').value,
        text:document.getElementById('text').value
    }
    socket.emit('add-message', mensaje);
    return false;
}