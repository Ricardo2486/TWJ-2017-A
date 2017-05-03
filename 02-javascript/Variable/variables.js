//variables.js
//En javaScript se define una variable con la palabra reservada <var>
//ENTEROS
var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

//FLOAT
var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//TODAS LAS DEMAS
var verdadero = true;
var falso = false;
var nombre = 'Cristian';
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -5648;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null; //null y undefined se los toma como falso

var variable;
console.log(variable);
console.log(cuatroString);

var numero2 = 2;
console.log(typeof nombre); // el typeof nos sirve para saber que tipo es la variable

//OBJETOS JSON
//necesitamos abrir las llaves
var cristian ={
    "id":1,
    nombre:'Cristian',
    createdAt: 'hoy',
    updatedAt: new Date(),
    casado: true,
    prestamos: false,
    hijos: null,
    altura: 1.70,
    negativo:-1,
    mascota:{ //pasra crear un objeto dentro de otro objeto no hay que igualarle a nada
        nombre: 'Cachetes',
        fechaNacimiento: Date()
    }
};
//las variables pueden ser igualados a lo que sea
console.log('OBJETO:',cristian);
console.log('Altura:',cristian.altura);
cristian.altura = 1.65;
console.log('Altura:',cristian.altura);

cristian.altura = {
    ancho: 2.1,
    altura: 1.65
}
console.log(cristian.altura);
delete cristian.altura; //delete par borra la variable totalmente
console.log(cristian);

//Agregar atributos a un objeto
cristian.juegos = 'varios';
console.log("Objetos",cristian);

//definicion de arreglos
var arreglo = [1,'Cristian',2.4,true,null,undefined,new Date(),-3412,{nombre:'Ricardo',edad:23}];
console.log (arreglo[3]);

var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);

var arregloDeObjetos = [
    {
        id:1,
        nombre:'Cristian'
    },
    {
        id:2,
        nombre: 'Ricardo'
    }
];
console.log('Antes',arregloDeObjetos);
//splice(Delimita la posicion en la que vamos a trabajar,
//          El numero de elementos que se desean eliminar)
arregloDeObjetos.splice(0,1)
console.log('Despues',arregloDeObjetos);
