/* // libreria incluida en node.js, sirve para crear servidores web y ckuentes http sin instalar nada
const http = require('http')

// CREAR SERVIDOR
const server = http.createServer((request, response) =>{ //en request se le pude poner un _ 
    response.end('hola desde node.js') //front
})
//reques: peticion que llega (URL que pidio el cliente, que metodo uso, etc)
//response: respuesta que voy a enviar

// ARRANCAR O PONER A ESCUCHAR EL SERVIDOR (en el puerto 3000)
server.listen(3000, ()=>{
    console.log('servidor escuchando en el puerto 3000 ') //back
})


// Algunos codigos mas comunes de errores 
/*
200	OK, esta todo bien
201	Created, cuando algo fue creado, por ej con POST
204	No Content, No hay nada para devolver. Ej al hacer un Delete
400	Bad Request, datos inválidos
401	Unauthorized, Usuario No autenticado
403	Forbidden, Autenticado pero sin permisos
404	Not Found, no encontrado el recurso
500	Internal Server Error, error interno del servidor
*/ 



