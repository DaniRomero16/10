function Estudiante(nombre,edad,estadoCivil){

this.nombre="";
this.edad=null;
this.estadoCivil="";


if (nombre){
    this.nombre=nombre;
}
if (edad){
    this.edad=edad;
}
if (estadoCivil){
    this.estadoCivil=estadoCivil;
}

Estudiante.prototype.getEstudiante= function(){
    return ("Nombre :" + this.nombre + " ,"+ " Edad: " + this.edad+ " ,  Estado Civil: " + this.estadoCivil);
}


}