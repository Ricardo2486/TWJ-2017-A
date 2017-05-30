import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre:string = "Cristian";

  arregloUsuarios =[{
    nombre: "Rafael",
    apellido: "Eguez"
  },
    {
      nombre: "Adrian",
      apellido: "Eguez"
    },
    {
      nombre: "Juan",
      apellido: "Eguez"
    },]

  constructor() { }

  ngOnInit() {
  }




}
function cambiarNombre ():void{

  this.nombre = "Rafico a Lenin";
}
function cambiarOtroNombre()
{
  this.nombre = "Lenin A Rafico";
}

function cambiarNombreInput(nombreEtiqueta){
  console.log(nombreEtiqueta.value);
  console.log(nombreEtiqueta.type);
  console.log(nombreEtiqueta.placeholder);
  this.nombre=nombreEtiqueta.value;
}
