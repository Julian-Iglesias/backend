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

const miPrimerPromesa = (type, ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type) {
                resolve('se resolvio')  
            } else {
                reject('error al resolver')
            }
        }, ms)
    })
}
miPrimerPromesa(true, 3000)
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//Async/Await
/* Pemite escribir codigo asincrono como si fuera sincrono (forma moderna de trabajar con promesas) */