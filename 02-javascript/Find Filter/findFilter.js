/**
 * Created by User on 10/05/2017.
 */
//FIND Y FILTER
let arreglo = [8,9,4,2,4,6,9,8,7];

let notasDeSupletorio = arreglo.map ((valor,indice)=>{
    return valor;
})
    .filter ((valor)=>{
        return valor<6;
    })
    .find ((valor)=>{
        return valor>=4
    })
console.log(notasDeSupletorio)