//creacion de las clase personajes para luego que el usuario eliga su personajes

//seleccion de elementos de html para poder trabajarlo en Javascript

//seleccion de elementos segun su id y se guardan en un variable de tipo
//constante
const comenzarJuego = document.getElementById('comenzarJuego')
const botonComienzo = document.getElementById('botonComienzo') 
//seccion de boton de comenzar

//selecionar seccion de Personaje
const seleccionarPersonaje = document.getElementById('seleccionarPersonaje')

//seleccion de boton de personaje
const seleccionarBoton = document.getElementById('seleccionarBoton')

//seleccion de la seccion de mapa
const mapaJuego = document.getElementById('mapaJuego')
//definir una variable para el mapa donde se movera nuestro Personaje
//ocultar seccion de mapaJuego mientras se ejecuta la funcion de iniciarJuego

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

//variable para guardar el objeto de personaje que el usuario selecciono
let personajeJugadorObjeto

//crear un variable para indicar en cuanto tiempo se imprime el 
//mapa denuevo
let intervalo

//crear una variable para guardar la imagen de fondo del mapa
let mapaBackground = new Image()
mapaBackground.src = 'https://i.imgur.com/Z5o8WPC.png'

//creacion de clase para crear objetos de los personajes
//ahora falta crear los personajes y sus fotos
class Personaje {
    constructor(nombre, foto, vidas, fotoMapa, id = null){//creacion de la clase 
        //personaje, donde este personaje tendra un nombre, foto y  
        //un id para ser reconocido por el servidor

        //aqui se define los propiedades de la clase
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas //al chocar con algun objeto se pierde vidas 
        this.id = id

        //definicion de los parametros de posicion y
        //velocidad del personaje

        //posicion aleatoria en en el mapa
        this.x = mapa.width/3
        this.y = 2*mapa.height/3

        //Definicion de la velocidad inicial
        this.velocidadX = 0
        this.velocidadY = 0

        //tambien definimos las propiedades del mapa
        //para el jugador en canvas
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa

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

    //Escuchar evento de click que indica que se iniciado el juego
    //y se debe cargar la funcion para ver los personajes para 
    //que luego el jugador los seleccione

    // Mostrar la sección "comenzarJuego"
    comenzarJuego.style.display = 'block'

    //Ocultar seccion de seleccionar jugador
    seleccionarPersonaje.style.display = 'none'

    //Ocultar seleccion de mapa
    mapaJuego.style.display = 'none'
    
    //escuchar el evento de click sobre el boton de 
    //seleccionar personaje
    botonComienzo.addEventListener('click', verPersonajes)
    
}

//en esta funcion de ejecuta cuando el jugador da click al boton 
//comenzar y entonce se carga la pantalla donde puede ver sus personajes
function verPersonajes(){
    //Ocultar la sección "comenzarJuego"
    comenzarJuego.style.display = 'none'

    //mostrar la seccion de seleccionar jugador o personaje
    seleccionarPersonaje.style.display = 'flex'

    //aqui debemos infectar al html los personajes que se crearon
    //primero recorremos la lista de personaje y a cada personaje 
    //le damos un estructura html para que aparezca en html
    personajes.forEach((personaje) => {
        //Guardar el html generado en una variable para
        //luego inyectar en el html
        opcionesPersonajes =  `
        <input type="radio" name="personaje" id=${personaje.nombre} />
        <label class="tarjeta-de-personaje" for=${personaje.nombre}>
            <p>${personaje.nombre}</p>
            <img src=${personaje.foto} alt=${personaje.nombre}>
        </label>
        `   
        //los botones de seleccion solo estan un poco desordenados pero existen
        //solo hay que usar css

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
    seleccionarBoton.addEventListener('click', verificarPersonaje)
    
    //debe crearse un boton para reiniciar juego
}

//funcion para identificar que personaje selecciono el jugador
function verificarPersonaje(){

    //ocultar seleccion de seleccionar personaje
    seleccionarPersonaje.style.display = 'none'

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
    mapaJuego.style.display = 'flex'
    iniciarMapa()

}

function iniciarMapa(){
    //aqui cargamos el mapa en canvas
    //primero debemos crear un variable que guarde el objeto
    //de personaje seleccionado esto se extraer por medio de una
    //funcion
    personajeJugadorObjeto = obtenerObjetoPersonaje(personajeJugador)

    //ver en terminal si la variables son correctas o en caso contrarion 
    //rastrear el erro
    console.log(personajeJugadorObjeto, personajeJugador)

    //estar actualizando el mapa en cierto intervalo de tiempo
    intervalo = setInterval(pintarCanvas, 50) //cada 50 milisegundos
    //ejecutar la funcion pintarCanvas es decir el mapa
    //ahora debemos crear la funcion pintarCanvas

    //leer eventos cuando se presiona un tecla o no


}

function obtenerObjetoPersonaje(personajeJugador) {
    //recorrer la lista de jugadores para verificar 
    //que personaje se selecciono
    for(let i = 0; i < personajes.length; i ++){
        if(personajeJugador == personajes[i].nombre){
            return personajes[i] 
            //retornar el personaje encontrado en la lista
        }
    }
}

function pintarCanvas(){
    //definimos el movimiento de los personajes en terminos 
    //de su posicion y velocidad
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY

    //limpia todo el contenido anterior del mapa
    //eso se hace para que aparezca cada jugador en su 
    //nueva posicion ya que sino se hace esto apareceran las imagenes
    //superpuestas en cada iteracion
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    //es importante definir el ancho y el alto del mapa

    //ahora dibujamos la imagen de fondo del
    //mapa en canvas
    lienzo.drawImage(
        mapaBackground, //imagen de fondo
        0,
        0,
        mapa.width,
        mapa.height
    )

    personajeJugador.pintarPersonaje()
}

window.addEventListener('load', iniciarJuego) //iniciar juego una vez que se haya cargado todo
//el sitio web
