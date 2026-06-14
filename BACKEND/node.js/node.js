BACKEND I


Node.js permite ejecutar JS fuera del navegador
js > en navegador y en servidor (node)



Promesas (promise):
Es un objeto que representa la eventual finalizacion o fallo de una operacion asincrona y su valor resultante.

Async/Await:
permite escribir codigo asincrono de forma secuencial y mas legible. Se usa try/catch para manejar errores.



Operadro spread(...)
expande los elementos de un array u objeto.
const numeros = [1, 2, 3];
const nuevos = [...numeros, 4, 5]; 
// Resultado: [1, 2, 3, 4, 5]
const usuario = { nombre: "Ana", edad: 25 };
const copia = { ...usuario, ciudad: "Buenos Aires" };
// Resultado: { nombre: "Ana", edad: 25, ciudad: "Buenos Aires" }

Operador Rest(...)
agrupa elementos restantes en un array u objeto
const [primero, ...resto] = [10, 20, 30, 40];
// primero = 10
// resto = [20, 30, 40]
const { nombre, ...otros } = { nombre: "Ana", edad: 25, ciudad: "Buenos Aires" };
// nombre = "Ana"
// otros = { edad: 25, ciudad: "Buenos Aires" }

Operador exponencial(**)
Eleva un numero a la potencia de otro.

Operador nullish(??)
Devuelve el operando derecho solo si el izquierdo es null o undefined.
const valor = null ?? 'valor por defecto'; // 'valor por defecto'



Promise.prototype.finally() 
Permite ejecutar codigo de limpieaz o liberacion de recursos tras la resolucion o rechazo de una promesa.

finally() 
Este metodo es una adicion a la cadena de promesas que permite ejecutar una funcion una vez que la promesa se ha resuelto o rechazado, sin importar el resultado.Async



Ejecución Sincrona:
Es un modelo donde las instrucciones se procesan una tras otra, esperando que cada operacion temrine antes de iniciar la siguiente. Si una tarea tada mucho, el programa se bloquea hasta terminar.
const data = readFileSynck('archivo.txt'); // Bloquea hasta leer el archivo
console.log(data)
readFileSync es una operacion bloquenate que detiene el flujo hasta completar la lectura.

Ejecucion Asincrona:
Permite que el programa inicie una operacion y continue con otras tareas sin esperar que la primera termine. Esto se logra mediante CALLBAKS, PROMESAS o ASYNC/AWAIT.
fs.readFile('archivo.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Lectura iniciada');
La lectura del archivo no se bloquea y el programa sigue funcionando mientras espera una respuesta.




CALLBACK:
Funcion que se ejecuta tras completar una operacion asincrona.
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

saludar("Ana", () => {
  console.log("Saludo finalizado");
});



import():
Permite cargar modulos de forma dinamica en tiempo de ejecucion. Carga codigo solo cuando es necesario.
// Ejemplo básico de importación dinámica
async function cargarModulo(nombreModulo) {
  const modulo = await import(`./modulos/${nombreModulo}.js`);
  modulo.funcionPrincipal();
}

Array.flat()
Metodo que permite aplanar arrays aniddados hasta una profundidad especificada.
const datos = [1, 2, [3, 4, [5, 6]]];
console.log(datos.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(datos.flat(2)); // [1, 2, 3, 4, 5, 6]

Métodos de trimming: trimStart(), trimEnd() y trim()
Permiten eliminar espacios en blanco o caracteres especificos al InputDeviceInfo(trimStart()), al final (trimEnd()) o en ambos extremos (trim()) de una cadena.
const entrada = '  usuario@example.com  ';
console.log(entrada.trimStart()); // 'usuario@example.com  '
console.log(entrada.trimEnd());   // '  usuario@example.com'
console.log(entrada.trim());      // 'usuario@example.com'



Eventos:
Accion o suceso que ocurre en el sistema, como click del mouse, pulsacion de tecla o el envio de un formulario.

addEventListener 
Es un metodo que permite suscribir una funcion para que se ejecute cuando ocurra un evento especifico en un elemento.
element.addEventListener('click', function(event) {
  console.log('Se hizo clic en el elemento');
});

removeEventListener: 
Elimina un manejador previamente registrado, evitando que se ejecute en eventos futuros.
function handleClick(event) {
  console.log('Click detectado');
}
element.addEventListener('click', handleClick);
// Más tarde...
element.removeEventListener('click', handleClick);

Dentro de un manejador THIS se refiere al elemento que recibio el evento,
button.addEventListener('click', function() {
  console.log(this.id); // ID del botón clickeado
});



Control del flujo de eventos:

preventDefault()
Este metodo cancela la accion predeterminada que el navgador ejecutaria ante un evento.
Por ejemplo, evitar que un formulario se envie automaticamente para validar datos primero.
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Validar datos antes de enviar
});

stopPropagation()
Detiene la propagación del evento hacia elementos padres, evitando que otros manejadores se ejecuten.
childElement.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Click manejado solo en el hijo');
});

Tipos de eventos comunes en aplicaciones:
Mouse: click, dblclick, mouseover, mouseout
Teclado: keydown, keyup, keypress
Formularios: submit, change, input



#
Campos privados en clases usando el prefijo //#







query params:
son valores que se agregan al final de un URL despues del signo de interrogacion (?)
- Sirven para filtrar, ordenar o modificar los resultados de una peticion en una API o pagina web. 

sintaxis: https://dominio.com/recurso?clave1=valor1&clave2=valor2
- El signo ? indica el inicio de una cadena de consulta, y & separa cada parametro adicional


1xx son informativos
2xx todo salio bien
3xx redireccion
4xx error
5xx cuando el servidor falla