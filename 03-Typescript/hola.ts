/**
 * Created by User on 16/05/2017.
 */


//boolena
let soltero : boolean = true; //false
//number
let materias: number =2.3;
//String
let nombre: string = "Cristian";

let frase: string = `El numero de materias es ${materias+1}`;

//arrays
let notas: number[]=[1,2,3]
let notas: Array<number>=[1,2,3]

//any //Convierte la variable en javascript es decir puede convertir como desee
let nombre:any = "crist";
nombre = 12;

//Objetos
let usuario: UsuarioLogin = {
    nombre: "Cristian",
    apellido:"Cabascango",
    direccion:"Comite del Pueblo"

}

//Interface permite crear un tipo de datos
interface UsuarioLogin {
    nombre:string,
    apellido:string,
    direccion?:string //el signo de interrogacion significa que es opcional
}


//Creacion de clases
class Persona{
    nombre:string="Nom"; // es public por defecto
    apellido:string;
    public fechaNacimiento:Date;

    constructor(nombre?:string,apellido?:string,fechaNacimiento?:Date){

    }
    //Creacion de funciones
    imprimirPersona(){
        console.log(this.nombre)
    }
}

let cristian: Persona=new Persona();
console.log(cristian.nombre="Cristian",cristian.apellido="Cabascango");








