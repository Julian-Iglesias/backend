// mensaje en consola
console.log("holaaaaaa");

// muestra el tipo de dato
console.log(typeof("hola")); //string
console.log(typeof("22")); //number
console.log(typeof("true")); //boolean
console.log(typeof({"nombre": "juli"})); //object

// objetos (clave: valor)
const usuario = {
    nombre: "juli",
    edad: 22
};

// arrays (arreglos)
const numeros = [1,2,3];


'use strict' //evita el uso de variables no declaradas

console.log(miVariableVar) //hoisting
var miVariableVar = 'hola'

let miVariableLet= 'soy let' //no hoisting (no se puede usar la variable hasta que no este declarada)
console.log(miVariableLet)


//scope = alcance
if(true){
    let miVariableDentroDeUnIf = 'hola'
    console.log(miVariableLet)
}
//console.log(miVariableDentroDeUnIf)


const miVariableConst = 'soy const'
console.log(miVariableConst)

// no se puede reasignar cosas a const pero si se puede modificar
// error: miVariableConst = 3

const miArrayConst=[1,2,3]
miArrayConst.push(4)       
console.log(miArrayConst)       



//funciones:
saludar()
function saludar(){ // hoisting
    console.log('hola funcion')
}

/* console.log(saludarArrow) // sin hoisting: error
const saludarArrow = () => console.log('hola funcion flecha') */



// concatenaciones:
const nombre = 'juli'
console.log('me llamo: '+nombre) //concatenar de forma tradicional
console.log(`me llamo: ${nombre}`) //concatenar con template string ``
console.log(`cuenta: ${1+1}`)




// clases 
class Producto{
    constructor(nombreP,precioP){ // la P es para diferencia que es un aprametro, no se usa mucho
        this.nombre = nombreP //variable
        this.precio = precioP
    } 
    mostrarInfo(){
        console.log(`Esto es un producto ${this.nombre} que vale $${this.precio}`)
    }
}

const tv= new Producto("sony 55'",200000) //cuando le paso el valor, este se llama "argumento "
const pc= new Producto('hp',900000) //Instancia de clase
console.log(tv)
console.log(pc)

tv.mostrarInfo()
pc.mostrarInfo( )


class Usuario {
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }
    setEdad(nuevaEdad){
        if(typeof nuevaEdad !== 'number' || nuevaEdad <= 0){
            throw new Error('edad invalida') //lanzar nuevo error
        } 
        this.edad = nuevaEdad
    }
}

let usuario1= new Usuario('pablo',38)
console.log(usuario1)

usuario1.setEdad(39)
console.log(usuario1) //lanza el error


// capturar los errores 
try{
    usuario1.setEdad('40')
}catch(error){
    console.log(error.message) //da un mensaje del error directamente
}




//Sincronismo
/* Las instrucciones se procesan una tras otra, esperando que cada operacion termine antes de iniciar la otra */

//Asincronismo
/* El programa inica una operacion y continua con otras tareas sin esperar que la primer tarea termine, esto se logra con callbacks, promesas o asyinc/await */

//Callbacks
/* funcion que se pasa como argumento a otra funcion para ejectuarse cuando una tarea termina */




//Promesas
/* Representa el resultado de una poperacion que puede completarse en el futuro (pending, fulfille o rejected) (objeto asincrono)*/
/* const miPrimerPromesa =(type)=> {
    return new Promise((resolve,reject) => {
        if(type){
            resolve('se resolvio') //si se ejecuta el resolve, cambia de estado a fulfilled  
        } else {
            reject('error al resolver') // provoca que cambie el estado a reject
        }
    })
}
console.log(miPrimerPromesa(false)
// controlar promesas
.then((data) => { //este se ejecuta cuando se resuelve la promesa
    console.log(data)
})
.catch((error)=>{ //este se ejecuta cuando se ejecuta el reject, o sea cuando la promesa falla
    console.error(error)
})
//.finally(()=>{}) //se ejecuta siempre al final
)  */

const miPrimerPromesa = (type, ms = 3000) => { // seteo un valor por defecto
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type) {
                resolve('se resolvio la promesa')  
            } else {
                reject('error al resolver la promesa')
            }
        }, ms)
    })
}
miPrimerPromesa(true) // como ya cree el valor por defecto del ms = 3000, no hace falta ponerlo aca
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})




//Async/Await
/* Pemite escribir codigo asincrono como si fuera sincrono (forma moderna de trabajar con promesas) */
async function miPeticionControlada(){
    try{
        const response = await fetch('traer los usuarios')
        const idPubli= response.id
        const responseData= await fetch('traer los comentarios por id de publicacion'+ idPubli)
        return responseData
    } catch (e){
        console.log(e)
    }
}




// Rest Operator: junta todos los parametros
//sintaxis: ...(tres puntos), va despues de un objeto o un array
const sumarParametros =(...data) => data.reduce((sum,ele)=> sum+ele, 0)
console.log(sumarParametros(1,23,3))
console.log(sumarParametros(1,23,3,312,123,45,4))
console.log(sumarParametros(1,23,3,5,31,76,4357,236,7))


// Spread Operator: copia o junta arrays y objetos (expande).
//misma sintaxis que rest operator
const productos = [
    { nombre: "Manzana", price: 30 },
    { nombre: "Banana", price: 60 },
    { nombre: "Laptop", price: 1200 },
    { nombre: "Auriculares", price: 45 },
    { nombre: "Monitor", price: 300 }
];
const productosFinales = productos.map((ele)=>{
    return{
        ...ele, //spread operator
        esCaro: ele.price > 50
    }
})
console.log(productosFinales)




//Modulo incluido en Node.js
//sirve para trabajar con archivos y directorios dentro de la compu
const fs = require('fs') //File System fs

//readFile lee el archivo que queramos
//config.json es donde esta ubicado el archivo, como lo tengo en la misma carpeta, solo pongo el nombre
fs.readFile('config.json','utf8',(err,data)=>{
    if(err){
        console.log('error al leer el archivo', err.message)
        return
    }
    console.log('data: ', data)

    console.log(data.nombre) //undefined

    //los archivos que lea, hay que parsearlos
    // PARSEAR: convertir el archivo .json en un objeto manipulable
    try{
        const config = JSON.parse(data)
    }catch(err){
        console.log('error al convertir a obj', err.message)
    }
    console.log(config.usuarios[0].nombre)
})

//JSON.stringify convierte los objs js en un string JSON (texto plano), lo contrario a parsear
// PARSE - de texto a objeto
// STRINGIFY - de objeto a texto




// ------ PATH -------
/* const fs = require('fs')

//path: sirve para manejar rutas de archivos y carpetas de forma segura y multiplataforma
const path = require('path')

//path.join une fragmentos de ruta (elimina boles barras, corrige separadores, etc. Los concatena)
const fullPath = path.join(__dirname, 'data', 'users.json');

fs.readFile(fullPath, 'utf8', (err, data) => {
    if (err) {
        console.error('error al leer archivo: ', err.message);
        return;
    }


    try {
        const users = JSON.parse(data);

        console.log("Usuarios encontrados:");
        console.log(users);

        console.log("--------------------------------");

        // Recorremos usuarios
        users.forEach((user, index) => {
            console.log(
                `Usuario ${index + 1}: ${user.nombre} - ${user.email}`
            );
        });

    } catch (error) {
        console.error("El JSON es inválido", error.message);
    }
})
 */



// ------ HTTP -----
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



// --------- NPM ---------
// Administrador de paquetes para node.js
// instalar, compartir y gestionar dependencias que el proyecto necesite.


// --------- package.JSON --------
// corazon del proyecto, este puede contener:
// metadatos del proyecto, dependencias, devDependencias, scripts

// en la mayoria de los casos, cuando creamos un proyecto, este se crea solo
// en NODE no se crea automaticamente, lo tenemos que crear nosotros


// RANGOS DE VERSIONES:
// dentro del package.json se pude especifiar rangos para las versiones de las dependencias, ej:

/* 
Ejemplo: La versión 2.3.1 indica:

Major: 2
Minor: 3
Patch: 1 */

// ^1.2.3: acepta actualizaciones que no cambien el número MAJOR (1.x.x)
// ~1.2.3: acepta actualizaciones que no cambien el número MINOR (1.2.x)


 
