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

//escuchar la peticiones de los clientes
app.listen(8080, () => {
    console.log("Servidor funcionando")
})
