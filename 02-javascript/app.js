/**
 * Created by User on 03/05/2017.
 */

console.log('Hola Mundo'); //.log es una funcion que admite strings

//acceder a los variables dentro del objeto el nombre del objeto con .
var cristian ={
    nombre:"Cristian",
    apellido: "Cabascango",
    imprimir: function (){
        console.log(cristian.nombre,cristian.apellido);
}
}

cristian.imprimir();
//para acceder a las variables dentro del objeto con this
var ricardo ={
    nombre:"Ricardo",
    apellido: "Cabascango",
    fechaNacimiento: new Date(),
    imprimir: function (){
        console.log(this.nombre,this.apellido);
    },
    año: function (){
        return this.fechaNacimiento.getFullYear();//Obtener el año actual del sistema
    },
    diferenciaEdad:function (edadAComparar){
        return Math.abs(this.fechaNacimiento.getFullYear()-edadAComparar);
    }
}
ricardo.imprimir();
console.log(ricardo.año());
console.log(ricardo.diferenciaEdad(2030));

