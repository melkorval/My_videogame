//seleccionar la seccion de canvas
const mapaCrear = document.getElementById('mapaCrear');

//seleccionar canvas para dibujar en este
const mapaCanvas = document.getElementById('mapa');
let dibujo = mapaCanvas.getContext("2d");

//crear un intervalo de ejecucion de nuestro personaje
let intervalo_ejecucion; 

//creamos un variable para nuestro fondo del canvas
//es importante usar el evento onload para asegurar
//que nuestra imagen este cargada

let fondo_mapa = new Image();
fondo_mapa.src = 'https://i.imgur.com/pdIMi1i.png';

// se crea un variable de nuestro personaje para poder enviarlo al 
// backend 
let personajeJugador;

//crear variable de jugador id
let jugadorId = null;

//debemos crear una clase para generalizar el codigo y 
//poder colocar coordenadas al personaje creado
class Personaje {
    constructor(nombre, foto, x, y, ancho, alto){
        this.nombre = nombre;
        this.foto = foto;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen_rect = new Image();
        this.imagen_rect.src = foto;
        
        //id del jugador
        this.id = id;

        //es importante tener la imagen totalmente cargada
        //para utilizarla por esto se usa el evento onload
        this.imagen_rect.onload = () => {
           iniciarCanvas();
           pintar_intervalo(); //llamar funcion en el evento onload
           PintarPersonaje();
           //se llama esta funcion ya que es necesario que la imagen
           //este cargada para luego que aparezca en el canvas para 
           //asegurar que esto ocurra se usa el evento onload.

           //las funciones deben ir aqui para cargar las imagenes
           //antes de ejecutarse
           unirse_juego();
           seleccionarPersonaje(personajeJugador);


        }

        //agregamos velocidad al nuestro personaje asi que cuando se 
        //sostenga el click este tendra velocidad determinada y no se
        //quedaran quietos
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
}

//creacion del personaje
sylvarani = new Personaje('Sylvarani', 'https://i.imgur.com/d2UE9mQ.png', 4, 4, 50, 50);

function iniciarCanvas(){

    //ahora dentro del canvas podemos dibujar un rectangulo
    //dibujo.fillRect(60, 50, 30, 30); 
    //coordenadas 20 en x y 40 en y con una ancho de 30 y alto 30
    
    //ahora podemos crear un rectangulo con una imagen
    //let imagen_rect = new Image(); //Crear objeto imagen
    
    //imagen_rect.src = sylvarani.foto;

    //ahora vamos a crear la forma de mover nuestro personaje con las teclas
    //escuchar el evento cuando se presionado una tecla
    window.addEventListener('keydown', tecla_pres); //una vez que 
    //se presione una tecla se ejecuta la funcion se presiono una tecla

    //luego escuchar el evento cuando no se presiona una tecla entonces detener 
    //movimiento
    window.addEventListener('keyup', detenerMovimiento)

    //crear un funcion para enviar al servidor que un nuevo jugador se a unido
    unirse_juego();
    //esta funcion retorna el id del jugador

    //indicar personaje seleccionado utilizar botones y crear mas personajes 
    //para hacer esto.
    //ya que el id es dado por el servidor y luego lo enviamos
    //al servidor para su identificacion

    sylvarani.id = personajeId;

    personajeJugador = sylvarani.id;

    //ahora debemos crear la funcion fetch
    seleccionarPersonaje(personajeJugador);
}

//fetch permite hacer solicitud http GET a la url proporcionada que son 
//asincronas, ya que el servidor se puede tardar en responder por lo cual
//se usa el metodo then para que cuando se obtenga un respuesta del servidor entonces
//imprimir esta respuesta para indicar que el servidor respondio.
function unirse_juego(){
    //aqui se hace un peticion fetch para realizar solicitud al servidor.
    //es un funcion asincrona por lo cual usamos then
    fetch("http://localhost:8080/unirse")
        .then(function (res) {//se ejecuta un callback
        //console.log(res); //imprimir la respuesta del servidor en terminal.

        //verificar que la respuesta del Servidor fue existosa
        if(res.ok){ //si res.ok es true la respuesta es existosa
            res.text()//leer el cuerpo de la respuesta como texto.
                .then(function (respuesta) {
                    console.log(respuesta); //imprimir respuesta en consola.
                    //como la respuesta es el jugador id entonce la jugardamos en una
                    //variable 
                    personajeId = respuesta;
                })
        }
    })

    //importante: Encender el servidor para ver los resultados !!!!
            
}

//Solucionar problema: no carga la imagenes del canvas al hacer la
//solicitud post.
function seleccionarPersonaje(personajeJugador){
    //ahora realizamos el envio del id del jugador al
    //servidor para indicar cual personaje se seleciono por
    //medio del id
    fetch(`http://localhost:8080/mokepon/${personajeId}`, {
            method: "post",
            //ahora debemos indicar que tipo de archivo vamos a 
            //enviar. 
            headers: {
                "Content-Type" : "application/json"
            },
            
            //convertir el JSON a texto
            body: JSON.stringify({
                personaje: personajeJugador
            })    

        } 
        )
}

function pintar_intervalo(){
    //intervalo de ejecucion de PintarPersonaje en el canvas
    intervalo = setInterval(PintarPersonaje, 50) //ejecutar funcion
    //cada 50 milisegundos
}

function PintarPersonaje(){ //para esta funcion debemos
    //crear un intervalo de tiempo para su ejecucion
  
    //cambiar dimensiones de nuestro mapa en canvas
    mapa.width = 800;
    mapa.height = 500;

    //definicion de la velocidad el personaje
    //antes de dibujarlo en el canvas
    sylvarani.x = sylvarani.x + sylvarani.velocidadX;
    sylvarani.y = sylvarani.y + sylvarani.velocidadY;

    //limpiar canvas para actualizar la posicion de nuestro personaje
    //ya que si no se hace esto hacer un efecto de imagen arrastrada
    //cada vez que se mueve
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);

    //pintar imagen de fondo del mapa
    dibujo.drawImage(
        fondo_mapa,
        0,
        0,
        mapa.width,
        mapa.height
    );

    dibujo.drawImage(
    sylvarani.imagen_rect,
    sylvarani.x,
    sylvarani.y,
    sylvarani.ancho,
    sylvarani.alto
    );

}

//definicion de funciones que para mover personajes a una determinada
//velocidad

function derecha(){
    sylvarani.velocidadX = 5;
}

function izquierda(){
    //ahora actualizamos la velocidad del personaje
    //sylvarani.x = sylvarani.x - 5;
    sylvarani.velocidadX = -5; //se movera cinco pixeles
}

function arriba(){
    sylvarani.velocidadY = - 5;
}

function abajo(){
    sylvarani.velocidadY = 5;
}

//debemos crear una funcion que detenga el movimiento ya que 
//sino se seguira moviendo el personaje de forma indefinida

function detenerMovimiento(){
    sylvarani.velocidadX = 0;
    sylvarani.velocidadY = 0;
}

//crear funciones para los eventos de presionado de una 
//tecla

//si puedo con esto programar un keylogger
function tecla_pres(event){
    //la funcion devuelve un evento
    //console.log(event.key); //revisar el evento que se 
    //ejecuto, no da el nombre de la tecla
    switch(event.key){ 
    //varios condicionales
        case 'ArrowUp'://tecla hacia arriba
            //ejecutar la funcion mover arriba
            arriba();
            break;
       
        case 'ArrowDown':
            abajo();
            break;

        case 'ArrowRight':
            derecha();
            break;
        
        case 'ArrowLeft':
            izquierda();
            break;

        default:
            break;

    }
}

//Muy importante cargar todo antes de dibujar
//window es un objeto que permita acceder a todo 
//el contexto de la ventana del navegador
window.addEventListener('load', iniciarCanvas);
