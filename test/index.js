//ahora vamos a trabajar con el backend
//instalar node.js: sudo apt install nodejs
//Luego instalar npm: sudo apt install npm

/*
Nodejs permite ejecutar codigo de javascript sin tener que 
utilixar el navgador
 

npm (Node Package Manager) permite la instalacion de 
paquetes de nodejs

-npm init: crear archivo de configuracion package.json donde
estan los metadatos de nuestro proyecto. 

metadatos - datos que dan informacion sobre los datos principales o
contexto a estos.


Ahora instalamos express js para poder crear un sitio web
con este framework

-npm install express

JSON - Javascript Object Notation
Es un archivo para transmitir informacion entre el cliente y 
servidor y es facil de escribir y de leer tanto para humanos
como para maquinas.

Este clase de archivo esta compuesto por una coleccion de
clave/valor que van en parejas de la siguiente manera

{

name : "Melkor",
age : 30,

}


*/


//Una vez instalado express los llamamos
const express = require("express");
//importar el modulo de express

//como necesitamos que se pueda enviar solicitudes desde el frontend
//entonces usamos la libreria cors
//npm install cors 
const cors = require("cors")

//creacion de la aplicacion que en este caso es el servidor
const app = express();
//definimos una nueva instancia de express que es nuestra aplicacion 
//o servidor

//ahora usamos la libreria cors para poder hacer solicitudes al Servidor
app.use(cors());

//ahora vamos a decirle a backend que vamos a utilizar un archivo JSON para 
//transmitir la informacion.
app.use(express.json()); //hacer que las solicitudes post sean usando
//un formato de datos JSON para enviar estas solicitudes.

//lista de jugadores 
const jugadores = [];

//crear un clase para el jugador y poder guardar su informacion

class Personaje {
    constructor(id){ //dentro de la clase esta el parametro id.
        this.id = id;
    }
}

//creamos un simple solicitud get donde el usuario pida un recurso y se le de una 
//respuesta

//app.get("/", (req, res) => { //req es el objeto que contiene la informacion de la solicitud realizada
    //y res es el objeto de respuesta
  //  res.send("Hola");
//})

//vamos a crear una solicitud para hacer que cada vez que un jugador se conecta al Servidor se 
//añada este juegador a un lista de jugadores.

//crea solicitud cuando el jugador se una entonces añadir a la lista.
app.get("/unirse", (req, res) => { //para probar esta solicitud ir a la url
    //http://localhost:8080/unirse aqui se hace la solicitud GET al Servidor
    //y este le da un id al jugador y lo añade a un lista de jugadores.

    //crear id del jugador con un numero aleotorio
    const id = `${Math.random()}`

    //creamos el objeto de jugador para anadirlo a la 
    //lista con su respectivo jugador.
    const jugador = new Personaje(id);

    //agregar a la lista de jugadores
    jugadores.push(jugador);

    //Es necesario indicar al servidor que permitimos que nuestro test.js
    //pueda hacer solicitudes a este.

    //ya no se usa ya que usaremos la libreria cors
    //res.setHeader("Access-Control-Allow-Origin", "*"); 
    //habilitar que cualquier origen realize una solicitud aunque
    //en la realidad esto es inseguro y debe existir un sitio que tenga
    //permisos para realizar solicitudes.

    res.send(id) //responder con el id del jugador
})


//crear la solicitud POST para recibir el JSON con la informacion del jugador.

app.post("/personaje/jugadorId", (res, res) => {
    //extraer de la solicitud POST el id del 
    //jugador
    const jugadorId = req.params.jugadorId || ""; //en caso que la variable
    //jugadorId no exista entonces solo dar un string vacio.

    console.log(jugadores);//lista de jugadores
    console.log(jugadorId);
    res.end();
})

//despues es necesario crear un funcion en frontend (test.js) para 
//enviar la solicitud al Servidor.

//como es un Servidor locar ejecutamos: http://localhost:8080/ en nuetro 
//navgador y obtenemos la respuesta de nuestro Servidor el mensaje "Hola"

//escuchar la peticiones de los clientes
app.listen(8080, () => {
    console.log("Servidor funcionando");
})
//En este codigo escucha los eventos por el puerto 8080 y ejecuta una funcion callback que
//solo imprime en terminal "servidor funcionando" para indicar que el servidor funciona

//Conceptos:
//Puerto: es un punto de conexion que permite intercambiar informacion con otra 
//
//maquina. el puerto 8080 utilizado para intercambiar informacion con el cliente y
//servidor
//
//Funcion callback: funcion que se ejecuta despues de una determinada operacion.
//solicitud GET: una solicitud get es cuando se solicita un recurso al servidor
//por parte del cliente y se responde a tal solicitud sin afectar el contenido 
//del servidor, esta solicitud este compuesta por un url donde se hace la 
//solicitud y una funcion callback que procesa la solicitud 

//http (Hypertext Transfer Protocol): Es el protocolo de World Wide Web para 
//la transferencia de datos entre servidor y el cliente.

//localhost: es el nombre que se refiere al propio dispositivo donde ser ejecuta
//un prueba aplicacion es como un servidor local.

//servidor: Es un computadora que da datos o recursos a clientes o dispositivos

//solicitud POST: Envia datos al servidor y hacer modificaciones en este.

//ejecutar servidor: node index.js
