/**
 * Created by User on 10/05/2017.
 */
//OBJECT LITERAL

function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre+"twitteo sobre: "+tweet
        },
    }
}

var nuevaFuncion=(nombre)=>{
    var usuario1={
        nombre:nombre
    };
    console.log('Hola'+usuario1.nombre);

    var usuario2={

        nombre
    }
    console.log(usuario2.nombre);
}

nuevaFuncion("cristian")