//creacion de las clase personajes para luego que el usuario eliga su personajes

//seleccion de elementos de html para poder trabajarlo en Javascript

//seleccion de elementos segun su id y se guardan en un variable de tipo
//constante
const comenzarJuego = document.getElementById('comenzarJuego')
const botonComienzo = document.getElementById('botonComienzo')
const seleccionarPersonaje = document.getElementById('seleccionarPersonaje')
const mapaJuego = document.getElementById('mapaJuego')
//definir una varible para el mapa donde se movera nuestro Personaje
const mapa = document.getElementById('mapa') //seccionar el div donde se colocara el mapa


let lienzo = mapa.getContext("2d") //creacion de un mapa 2d

//creacion de clase para crear objetos de los personajes
//ahora falta crear los personajes y sus fotos
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

//creacion de los personajes como objetos
//los objetos se guardan en un variable let
sylvanari = new personajes('Sylvanari', '', 3)
