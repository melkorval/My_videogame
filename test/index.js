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
*/


//Una vez instalado express los llamamos
const express = require("express")
//importar el modulo de express

//creacion de la aplicacion que en este caso es el servidor
const app = express()
//definimos una nueva instancia de express que es nuestra aplicacion 
//o servidor

//creamos un simple solicitud get donde el usuario pida un recurso y se le de una 
//respuesta

app.get("/", (req, res) => { //req es el objeto que contiene la informacion de la solicitud realizada
    //y res es el objeto de respuesta
    res.send("Hola")
})

//como es un Servidor locar ejecutamos: http://localhost:8080/ en nuetro 
//navgador y obtenemos la respuesta de nuestro Servidor el mensaje "Hola"

//escuchar la peticiones de los clientes
app.listen(8080, () => {
    console.log("Servidor funcionando")
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
