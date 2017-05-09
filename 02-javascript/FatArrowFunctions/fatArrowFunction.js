/**
 * Created by User on 09/05/2017.
 */
//FAT ARROW FUNCTION
var holaMundo = function(){console.log("Hola Mundo")}
holaMundo()

var holaMundo2 = ()=>{return "Hola Mundo 2"}
holaMundo2()

var holaMundo3 = ()=>"hola Mundo 3"
holaMundo3()

var holaMundo3 = ()=>holaMundo2()
holaMundo3()

var holaMundo4 = (nombre) =>`Hola: ${nombre}`
holaMundo4('Cristian')

var holaMundo5 = apellido =>`Hola: ${apellido}`
holaMundo4('Cabascango')

//Utilizamos parentesis y llaves cuando hay varios parametros
var holaMundo6 = (nombre,apellido) =>`Sr. ${apellido} ${nombre}`
holaMundo6('Cabascango','Cristian')