function StorageManager () {}

StorageManager.saveUser = function (user) {
	
	let jUser = user.toJSONObject();	
	
	let usuarios = sessionStorage.getItem("usuarios");
	if (usuarios){
		usuarios = JSON.parse(usuarios);
	}		
	else {
		usuarios = new Array();
	}
	usuarios.push(jUser);
	
	usuarios = JSON.stringify(usuarios);
	
	sessionStorage.setItem("usuarios", usuarios);
	
};

StorageManager.getUsers = function () {
	
	let usuarios = sessionStorage.getItem("usuarios");
	if (usuarios){
		usuarios = JSON.parse(usuarios);
	}		
	else {
		usuarios = new Array();
	}
	let usuariosRecreados = new Array();
	
	if (usuarios && usuarios.length > 0){
		
		for (let i = 0; i < usuarios.length; i++){
			let jUser = usuarios[i];
			let usuarioRecreado = new UsuarioBean(jUser);
			usuariosRecreados.push(usuarioRecreado);
		}		
	}
		
	return usuariosRecreados;
};	





