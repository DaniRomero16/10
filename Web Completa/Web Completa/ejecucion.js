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
	
	for (let i = 1; i < contador; i++) {
		let vacunas = new Array();
		vacunas.push(new Vacuna(null, document.getElementById('vacuneSelect' + i).value, document.getElementById('dates' + i).value));

		animales.push(new Mascota(null, document.getElementById('PetForm' + i).value, getRandomInt(1, 999), vacunas));

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

function addField() {
	let div = document.getElementById("nuevosCampos");
	div.appendChild(addPetForm());
	div.appendChild(addVacuneForm());
}

function addPetForm() {
	let divPet = document.createElement("div");

	let PetSelect = document.createElement("select");
	PetSelect.id = "PetForm" + contador;

	let PetSOp1 = document.createElement("option");
	PetSOp1.value = "Perro";
	PetSOp1.innerHTML = "Perro";
	let PetSOp2 = document.createElement("option");
	PetSOp2.value = "Gato";
	PetSOp2.innerHTML = "Gato";
	let PetSOp3 = document.createElement("option");
	PetSOp3.value = "Loro";
	PetSOp3.innerHTML = "Loro";

	let petNumber = document.createElement("h4");
	petNumber.innerHTML = 'Mascota: ' + contador;

	divPet.appendChild(petNumber);
	PetSelect.appendChild(PetSOp1);
	PetSelect.appendChild(PetSOp2);
	PetSelect.appendChild(PetSOp3);

	divPet.appendChild(PetSelect);

	return divPet;
}
function addVacuneForm() {
	let divVacune = document.createElement("div");


	let VacuneSelect = document.createElement("select");
	VacuneSelect.id = "vacuneSelect" + contador;

	let VacuneSOp1 = document.createElement("option");
	VacuneSOp1.value = "Polivalente";
	VacuneSOp1.innerHTML = "Polivalente";
	let VacuneSOp2 = document.createElement("option");
	VacuneSOp2.value = "Rabia";
	VacuneSOp2.innerHTML = "Rabia";
	let VacuneSOp3 = document.createElement("option");
	VacuneSOp3.value = "Parvovirus";
	VacuneSOp3.innerHTML = "Parvovirus";

	let vacuneDate = document.createElement("input")
	vacuneDate.setAttribute("type", "date");
	vacuneDate.id = "dates" + contador;
	vacuneDate.placeholder = "dates";

	VacuneSelect.appendChild(VacuneSOp1);
	VacuneSelect.appendChild(VacuneSOp2);
	VacuneSelect.appendChild(VacuneSOp3);

	divVacune.appendChild(VacuneSelect);
	divVacune.appendChild(vacuneDate);

	contador++;

	return divVacune;
}
