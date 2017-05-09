
//void

function holaMundo(){
    console.log('Hola Mundo');
}
holaMundo();

//El doble de un entero
function doble(numero){
    return numero*2;
}
console.log(doble(5));

//Devuelva mult 2 num
function multiplicar2 (a,b){
    return a*b;
}
console.log(multiplicar2(4,3));
//se guarda el valor de la variable
var dos = multiplicar2(1,2);
//si no ponemos sin parentesis se guarda la funcion
var multiplicacion = multiplicar2;
console.log(multiplicacion (6,4));

//cuando no se pone ningun nombre a la funcion se llaman funciones anonimas
var hola = function (){
    console.log('hola');
}
hola(); //hola
console.log(hola()); //undefined

var resultado = hola();
console.log(resultado);

function hazAlgo (algo){
    algo();
}
hazAlgo(function () { console.log('Haz Algo')});

function transformarNumero(numero, transformacion) {
    transformacion(numero);
}
transformarNumero(5,function (numero) {
    return numero*2;

})

transformarNumero(8,function (numero) {
    return numero/2;
})
