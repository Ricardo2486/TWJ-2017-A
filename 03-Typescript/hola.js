/**
 * Created by User on 16/05/2017.
 */
//Creacion de clases
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Nom"; // es public por defecto
    }
    //Creacion de funciones
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre);
    };
    return Persona;
}());
var cristian = new Persona();
console.log(cristian.nombre = "Cristian", cristian.apellido = "Cabascango");
