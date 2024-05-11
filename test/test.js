//seleccionar la seccion de canvas
const mapaCrear = document.getElementById('mapaCrear');

//seleccionar canvas para dibujar en este
const mapaCanvas = document.getElementById('mapa');
let dibujo = mapaCanvas.getContext("2d");

//crear un intervalo de ejecucion de nuestro personaje
let intervalo_ejecucion; 

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
        //es importante tener la imagen totalmente cargada
        //para utilizarla por esto se usa el evento onload
        this.imagen_rect.onload = () => {
           iniciarCanvas();
           pintar_intervalo(); //llamar funcion en el evento onload
           PintarPersonaje();
           //se llama esta funcion ya que es necesario que la imagen
           //este cargada para luego que aparezca en el canvas para 
           //asegurar que esto ocurra se usa el evento onload.

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
}

function pintar_intervalo(){
    //intervalo de ejecucion de PintarPersonaje en el canvas
    intervalo = setInterval(PintarPersonaje, 50) //ejecutar funcion
    //cada 50 milisegundos
}

function PintarPersonaje(){ //para esta funcion debemos
    //crear un intervalo de tiempo para su ejecucion
    
    //definicion de la velocidad el personaje
    //antes de dibujarlo en el canvas
    sylvarani.x = sylvarani.x + sylvarani.velocidadX;
    sylvarani.y = sylvarani.y + sylvarani.velocidadY;

    //limpiar canvas para actualizar la posicion de nuestro personaje
    //ya que si no se hace esto hacer un efecto de imagen arrastrada
    //cada vez que se mueve
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);

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

//Muy importante cargar todo antes de dibujar
window.addEventListener('load', iniciarCanvas);
