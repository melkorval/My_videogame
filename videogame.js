//creacion de las clase personajes para luego que el usuario eliga su personajes

//definir una varible para el mapa donde se movera nuestro Personaje
const mapa = document.getElementById('mapa') //seccionar el div donde se colocara el mapa

let lienzo = mapa.getContext("2d") //creacion de un mapa 2d

class Personaje {
    constructor(nombre, foto, vidas, id = null){//creacion de la clase 
        //personaje, donde este personaje tendra un nombre, foto y  
        //un id para ser reconocido por el servidor

        //aqui se define los propiedades de la clase
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas //al chocar con algun objeto se pierde vidas 
        this.id = id
    }

    pintarPersonaje() {
        //este metodo permita ver al personaje y asignarle una posicion inicial
        lienzo.drawImage(
         this.mapaFoto,
         this.x,
         this.y,
         this.ancho,
         this.alto
        )
    }
}
