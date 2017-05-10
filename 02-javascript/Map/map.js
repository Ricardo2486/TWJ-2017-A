/**
 * Created by User on 10/05/2017.
 */
//MAP
let arreglo = [1,3,8,5];

let resultado = arreglo.map((valor,indice)=>{
    return valor;
});
console.log(resultado)

let arreglo1 = [{nombre:"Cristian"},{nombre:"Ricardo"}];

let resultado1=arreglo1.map((usuario)=>{
    usuario.nombre = "Sr. o Sra."+usuario.nombre
    return usuario
})
console.log(resultado1)