//seleccionar la seccion de canvas
const mapaCrear = document.getElementById('mapaCrear');

//seleccionar canvas para dibujar en este
const mapaCanvas = document.getElementById('mapa');
let dibujo = mapaCanvas.getContext("2d");


function iniciarCanvas(){

    //ahora dentro del canvas podemos dibujar un rectangulo
    dibujo.fillRect(20, 40, 30, 30) 
    //coordenadas 20 en x y 40 en y con una ancho de 30 y alto 30
    
    //ahora podemos crear un rectangulo con una imagen
    let imagen_rect = new Image(); //Crear objeto imagen
    imagen_rect.onload = function() { //si funciono
        //Es importante que la imagen esta cargada en
        //su totalidad para utilizar por esta razon
        //se hacer uso de onload.
    dibujo.drawImage(
        imagen_rect,
        100,
        50,
        70,
        70
        );
    }
    
    imagen_rect.src = 'https://i.imgur.com/d2UE9mQ.png';
}

//Muy importante cargar todo antes de dibujar
window.addEventListener('load', iniciarCanvas)
