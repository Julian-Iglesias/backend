const fs = require('fs');
const path = require('path');

let input = '';
process.stdin.on('data', chunk => {
// process.stdin: standar input (de NODE)
// process.stdop: standar ouput
// son entradas que vamos a dar desde la consola
// on: evento
// chunk: pedazo
  input += chunk;
});

// cuando finaliza la entrada del usuario. se ejecuta la siguiente funcion:
process.stdin.on('end', () => {
  const relativePath = input.trim(); // corta espacios
  const absolutePath = path.join(__dirname, relativePath);

  console.log(absolutePath)

  // lee el archvio sin necesidad de una callback
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const config = JSON.parse(data);

  // Incrementar version
  if (typeof config.version === 'number') {
    config.version += 1; // incremento
  } else {
    config.version = 1; // Si no existe o no es número, inicializar
  }

    // Guardar archivo actualizado
  fs.writeFileSync(absolutePath, JSON.stringify(config, null, 2), 'utf-8'); // el 2 son los espacios que va a poner en el settings

})

//Ejectutar echo settings.json | node index.js
// | pipe
// Un pipe es un mecanismo del sistema operativo para conectar procesos mediante un flujo de datos.
//tomá la salida de echo y la usa como entrada (stdin) de node index.js
