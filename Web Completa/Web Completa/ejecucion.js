function crearUsuario() {

	let nombre = document.getElementById("nombre").value;
	let apellidos = document.getElementById("apellidos").value;
	let error = "";
	if (!nombre || nombre == "" || !apellidos || apellidos == "") {
		error = "Por favor revise sus datos";
	}

	let sexo = "M";
	if (document.getElementsByName("sexo")[0].checked) {
		sexo = "H";
	}

	let animales = new Array();
	if (document.getElementsByName("animal")[0].checked) {
		animales.push(new Mascota(null, 'Perro', getRandomInt(1,9999),new Array(new Vacuna(null, 'Polivalente', new Date()), new Vacuna(null, 'Rabia', new Date()))));
	}
	if (document.getElementsByName("animal")[1].checked) {
		animales.push(new Mascota(null, 'Gato', getRandomInt(1,9999),new Array(new Vacuna(null, 'Polivalente', new Date()))));
	}
	if (document.getElementsByName("animal")[2].checked) {
		animales.push(new Mascota(null, 'Loro', getRandomInt(1,9999),new Array(new Vacuna(null, 'Polivalente', new Date()))));
	}

	let ciudad = document.getElementById("id_provincia").value;

	let user = null;
	if (error != "") {
		document.getElementById("error").innerHTML = error;
	}
	else {
		document.getElementById("error").innerHTML = "";

		user = new UsuarioBean(null, nombre, apellidos, sexo, ciudad, animales);
	}


	if (user != null) {

		//TODO: paso 1: enviar al server		
		//TODO: paso 2: esperar respuesta del server

		//paso 2.5: resetear form
		document.getElementById("formulario").reset();

		//paso 3: almacenar los datos en el Locales/SessionStorage


		guardarDatosUsuario(user);

		//paso 4: pintar los datos en la web
		pintarDatosUsuario();



	}
}

function guardarDatosUsuario(user) {
	StorageManager.saveUser(user);
}

function pintarDatosUsuario() {


	let usuarios = StorageManager.getUsers();
	
	
	let tr = null;
	let table = document.createElement("table");
	document.getElementById("datos_usuario").innerHTML = '';

	for (let i = 0; i < usuarios.length; i++) {
		let td = document.createElement("td");
		td.appendChild(datosUsuario(usuarios[i]));
		if ((usuarios.length % 2 != 0) && (i == usuarios.length - 1)) {
			tr = document.createElement("tr");
			td.colSpan = 2;
			td.align = 'center';
			tr.appendChild(td);
			table.appendChild(tr);
		} else {
			if (i % 2 == 0) {
				tr = document.createElement("tr");
				tr.appendChild(td);
				table.appendChild(tr);
			} 
			tr.appendChild(td);
		}
	};

	document.getElementById("datos_usuario").appendChild(table);

}

function datosUsuario(user) {
	let tdName = document.createElement("td");
	tdName.colSpan = 2;
	tdName.innerHTML = user.getFullName();

	let tdSex = document.createElement("td");
	tdSex.innerHTML = user.getSexo();

	let tdCity = document.createElement("td");
	tdCity.innerHTML = user.getCiudad();

	let tdPets = document.createElement("td");
	tdPets.colSpan = 2;
	tdPets.innerHTML = user.mascotasToString();

	let trName = document.createElement("tr");
	trName.appendChild(tdName);

	let trSexCity = document.createElement("tr");
	trSexCity.appendChild(tdSex);
	trSexCity.appendChild(tdCity);

	let trPets = document.createElement("tr");
	trPets.appendChild(tdPets);

	let table = document.createElement("table");
	table.border = 1;
	table.appendChild(trName);
	table.appendChild(trSexCity);
	table.appendChild(trPets);

	return table;
}
