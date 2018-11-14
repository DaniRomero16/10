function Persona(jPerson, nombre, edad, estadoCivil) {
	this.nombre = null;
	this.edad = 0;
	this.estadoCivil = null;
	this.colorPelo = null;

	if (jPerson) {
		this.nombre = jPerson.nombre;
		this.edad = jPerson.edad;
		this.estadoCivil = jPerson.estadoCivil;
		this.colorPelo = jPerson.colorPelo;
	} else {
		if (nombre) {
			this.nombre = nombre;
		}

		if (edad) {
			this.edad = edad;
		}

		if (estadoCivil) {
			this.estadoCivil = estadoCivil;
		}
	}

	Persona.prototype.setNombrePersona = function (nombre) {
		this.nombre = nombre;
	}
	Persona.prototype.setEdadPersona = function (edad) {
		this.edad = edad
	}
	Persona.prototype.setEstado = function (estado) {
		this.estadoCivil = estado;
	}

	Persona.prototype.setColorPelo = function (color) {
		this.colorPelo = color;
	}

	Persona.prototype.getInfo = function () {
		let texto = "nombre " + this.nombre + " edad " + this.edad + " estado Civil " + this.estadoCivil;
		return texto;
	}

	Persona.prototype.toJSONObject = function () {
		
		let jPerson = {};

		jPerson.nombre = this.nombre;
		jPerson.edad = this.edad;
		jPerson.estadoCivil = this.estadoCivil;
		jPerson.colorPelo = this.colorPelo;

		return jPerson;

	}

}
