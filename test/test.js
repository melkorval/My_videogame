//seleccionar la seccion de canvas
const mapaCrear = document.getElementById('mapaCrear');

//seleccionar canvas para dibujar en este
const mapaCanvas = document.getElementById('mapa');
let dibujo = mapaCanvas.getContext("2d");

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
        //para utilizarla
        this.imagen_rect.onload = () => {
            iniciarCanvas();
            PintarPersonaje();
            //se llama esta funcion ya que es necesario que la imagen
            //este cargada para luego que aparezca en el canvas para 
            //asegurar que esto ocurra se usa el evento onload.
        }
    }
}

//creacion del personaje
sylvarani = new Personaje('Sylvarani', 'https://i.imgur.com/d2UE9mQ.png', 4, 4, 50, 50);

function iniciarCanvas(){

    //ahora dentro del canvas podemos dibujar un rectangulo
    dibujo.fillRect(60, 50, 30, 30); 
    //coordenadas 20 en x y 40 en y con una ancho de 30 y alto 30
    
    //ahora podemos crear un rectangulo con una imagen
    //let imagen_rect = new Image(); //Crear objeto imagen
    
    //imagen_rect.src = sylvarani.foto;

}

function PintarPersonaje(){
    dibujo.drawImage(
    sylvarani.imagen_rect,
    sylvarani.x,
    sylvarani.y,
    sylvarani.ancho,
    sylvarani.alto
    );

}

function derecha(){
    //limpiar canvas para actualizar la posicion de nuestro personaje
    //ya que si no se hace esto hacer un efecto de imagen arrastrada
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);
    //cada vez que se mueve
    sylvarani.x = sylvarani.x + 5;
    PintarPersonaje();
}

function izquierda(){
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);
    sylvarani.x = sylvarani.x - 5;
    PintarPersonaje();
}

function arriba(){
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);
    sylvarani.y = sylvarani.y - 5;
    PintarPersonaje();
}

function abajo(){
    dibujo.clearRect(0, 0, mapaCanvas.width, mapaCanvas.height);
    sylvarani.y = sylvarani.y + 5;
    PintarPersonaje();
}


//Muy importante cargar todo antes de dibujar
window.addEventListener('load', iniciarCanvas);
