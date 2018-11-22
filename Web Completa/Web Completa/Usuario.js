function UsuarioBean(jUser, nombre, apellidos, sexo, ciudad, mascotas) {
	this.mascotas = new Array();
	
	if (jUser){		
		this.nombre = jUser.nombre ;
		this.apellidos = jUser.apellidos;
		this.sexo = jUser.sexo;
		this.ciudad = jUser.ciudad;
		
		if (jUser.mascotas && jUser.mascotas.length > 0)
           this.mascotas = jUser.mascotas;
	   
	}
	else {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.sexo = sexo;
		this.ciudad = ciudad;
		this.mascotas = new Array();
		if (mascotas && mascotas.length > 0){
			this.mascotas = mascotas;
		}
	}
   
	UsuarioBean.prototype.getFullName = function(){
		return this.nombre + " " + this.apellidos;
	}
	
	UsuarioBean.prototype.getSexo = function(){
		return this.sexo;
	}
	
	UsuarioBean.prototype.getCiudad = function(){
		return this.ciudad;
	}
	
	UsuarioBean.prototype.mascotasToString = function(){
		let dato = "";
		if (this.mascotas.length > 0){
			for (let i = 0; i < this.mascotas.length; i++) {
				dato += this.mascotas[i].nombre + ' ';
				dato += 'Chip: ' + this.mascotas[i].chip_id + ' ';
				for (let j = 0; j < this.mascotas[i].vacunas.length; j++) {
					dato += 'Vacuna: ' + this.mascotas[i].vacunas[j].nombre + ' ';
					
				}
				dato += '<br>';
			}
		}
		return dato;
	}
   
	UsuarioBean.prototype.addPet = function(pet){
		this.mascotas.push(pet);
	}
   
    
	UsuarioBean.prototype.toJSONObject = function(){
        let jUser = {};
        
        jUser.nombre = this.nombre;
        jUser.apellidos = this.apellidos;
        jUser.sexo = this.sexo;
        jUser.ciudad = this.ciudad;
        if (this.mascotas && this.mascotas.length > 0)
            jUser.mascotas = this.mascotas;
        
        return jUser;
    }
}



