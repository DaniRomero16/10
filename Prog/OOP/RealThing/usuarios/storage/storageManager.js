function StorageManager() {}

StorageManager.saveUser = function (user) {
    
    let jUser = user.toJSONObject();

    let usuarios = sessionStorage.getItem("usuarios");

    if (!usuarios) {
        usuarios = new Array();
    } else {
        usuarios = JSON.parse(usuarios);
    }
    usuarios.push(jUser);

    usuarios = JSON.stringify(usuarios);

    sessionStorage.setItem("usuarios", usuarios);

};

StorageManager.getUsers = function () {
    
    let usuarios = sessionStorage.getItem("usuarios");

    if (!usuarios) {
        usuarios = new Array();
    } else {
        usuarios = JSON.parse(usuarios);
    }
    
    let usuariosRecreados = new Array();
    
    if(usuarios && usuarios.length > 0){
        usuarios.forEach(element => {
            let jUser = new Usuario(element);
            usuariosRecreados.push(jUser);
        });
    }
    return usuariosRecreados;
};