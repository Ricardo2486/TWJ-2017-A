/**
 * Created by User on 10/05/2017.
 */

//FOR EACH //Devuelve undefined//Itera arreglos
//OPERADORES
let arregloNumeros = [1,2,3,4,5,6];


let resultado = arregloNumeros.forEach((numero,indice)=>{ //funcion dentro del forEach
    console.log(indice,numero)
})

console.log('Resultado',resultado)

let nombres=['cristian','ricardo'];
let lista = nombres.forEach((numero,indice)=>{
    console.log(indice,numero)
})

//primer parametro un arreglo
//hacer el for
//imprimir el value y el index

function iterador (arreglo){
    for(var i=0;i<arreglo.length;i++){
        console.log(arreglo[i])
        console.log(i)
        console.log(arreglo)
    }
}
iterador(arregloNumeros)
