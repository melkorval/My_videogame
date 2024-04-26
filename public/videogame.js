//creacion de las clase personajes para luego que el usuario eliga su personajes

//seleccion de elementos de html para poder trabajarlo en Javascript

//seleccion de elementos segun su id y se guardan en un variable de tipo
//constante
const comenzarJuego = document.getElementById('comenzarJuego')
const botonComienzo = document.getElementById('botonComienzo') 
//seccion de boton de comenzar

const seleccionarPersonaje = document.getElementById('seleccionarPersonaje')

//seleccion de la seccion de mapa
const mapaJuego = document.getElementById('mapaJuego')
//definir una variable para el mapa donde se movera nuestro Personaje
const mapa = document.getElementById('mapa') 
//seccionar el div donde se colocara el mapa

//seleccion de div donde se colocara los personajes
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

//variable para guardar el codigo html donde se inyectaran los personajes
let opcionesPersonajes

//variable donde se guarde el personaje seleccionado por el jugador
let personajeJugador

let personajes = [] //crear una lista para guardar personajes cuando
//los objetos de este sean creados

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
sylvanari = new Personaje('Sylvanari', 'https://i.imgur.com/d2UE9mQ.png', 3)
melian = new Personaje('Melian', 'https://i.imgur.com/qMmmw5L.png', 3)
yelathien = new Personaje('Yelathien', 'https://i.imgur.com/oKDESH4.png', 3)

//ahora guardamos los personajes en la lista de personajes
personajes.push(sylvanari, melian, yelathien)

//Ahora debemos inyectar los objetos a el html
//para hacer esto primero creamos un variable donde se guarden nuestros
//personajes y creamos un funcion para iniciar juego

function iniciarJuego (){
    //aqui ocultar la otras secciones por medio de display
    //para que primero comienze con la primera seccion
    //La seccion que primero debe aparecer es la seccion
    //comenzarJuego y luego la seccion seleccionar Personaje
    //esta seccion del mapa esta guardada en la variable mapaJuego

    //ocultar seccion de seleccion de personaje
    seleccionarPersonaje.style.display = 'none'
    //ocultar seccion de mapa de canvas
    mapaJuego.style.display = 'none'

    //Escuchar evento de click que indica que se iniciado el juego
    //y se debe cargar la funcion para ver los personajes para 
    //que luego el jugador los seleccione

    botonComienzo.addEventListener('click', verPersonajes)
    
}

//en esta funcion de ejecuta cuando el jugador da click al boton 
//comenzar y entonce se carga la pantalla donde puede ver sus personajes
function verPersonajes(){
    //aqui debemos infectar al html los personajes que se crearon
    //primero recorremos la lista de personaje y a cada personaje 
    //le damos un estructura html para que aparezca en html
    personajes.forEach((personaje) => {
        //Guardar el html generado en una variable para
        //luego inyectar en el html
        opcionesPersonajes =  `
        <input type="radio" name="mascota" id=${personaje.nombre} />
        <label class="tarjeta-de-mokepon" for=${personaje.nombre}>
            <p>${personaje.nombre}</p>
            <img src=${personaje.foto} alt=${personaje.nombre}>
        </label>
        `   

    contenedorTarjetas.innerHTML += opcionesPersonajes
    //este codigo actualiza el contenido que esta dentro del elemento
    //html que tiene el id contenedorTarjetas esto se hace con la propiedad
    //innerHTML para insertar contenido dentro del elemento html

    //seleccion de los personajes segun su id de nombre
    inputsylvanari = document.getElementById('Sylvanari')
    inputmelian = document.getElementById('Melian')
    inputyelathien  = document.getElementById('Yelathien')
    
    })

    //Ejecutar funcion para ver que personaje seleccionó el jugador cuando
    //este haga click en el boton seleccionar
    seleccionarPersonaje.addEventListener('click', verificarPersonaje)

}

//funcion para identificar que personaje selecciono el jugador
function verificarPersonaje(){
    //hacer condicionales para indicar que personaje fue seleccionado
    //se debe crear un variable de las mascota que el jugador seleccionó
    if(inputsylvanari.checked){
        //mostrar en el HTML el nombre del jugador por su id en el HTML
        seleccionarPersonaje.innerHTML = inputsylvanari.id 
        //Guardar la personaje seleccionado por el jugador
        personajeJugador = inputsylvanari.id
    } else if(inputmelian.checked){
        seleccionarPersonaje.innerHTML = inputmelian.id
        personajeJugador = inputmelian.id 
    } else if(inputyelathien.checked){
        seleccionarPersonaje.innerHTML = inputyelathien
        personajeJugador = inputyelathien.id
    } else {
        //en el caso que no seleccione una mascota interrumpir el 
        //codigo
        alert("Por favor, seleccionar personaje")
        return //detiene el codigo
    }

    //ocultar la seleccion de personajes para luego cargar el mapa
    //canvas
    seleccionarPersonaje.style.display = 'none'

    //cargar mapa del juego
    //seccion de mapa
    mapaJuego.style.display = flex
    iniciarMapa()

}

function iniciarMapa(){
    //aqui cargamos el mapa en canvas
}