const http = require('http');

const server = http.createServer((req, res) => {

  console.log("--------------------------------");
  console.log("Nueva petición recibida");
  console.log("Método:", req.method);
  console.log("URL:", req.url);

  // Ruta principal
  if(req.url === "/") { // raiz del archivo

    // Headers CORS, cuando los origenes son distintos, el navegador bloquea la app
    res.setHeader('Access-Control-Allow-Origin', '*'); // este codigo permite correr la app por mas que el navegador lo bloquee

    res.statusCode = 200; // codigo de que esta todo bien
    res.setHeader('Content-Type', 'text/plain'); // texto plano

    res.end("Bienvenido al servidor");

  }

  // Ruta productos
  else if(req.url === "/products") {

    const productos = [
      { id: 1, nombre: "Coca Cola" },
      { id: 2, nombre: "Papas fritas" }
    ];

    res.statusCode = 200;

    // JSON
    res.setHeader('Content-Type', 'application/json'); // devuelve el .json

    res.end(JSON.stringify(productos)); //convierte el objeto a texto plano

  }

  // Ruta inexistente
  else {

    res.statusCode = 404; //codigo de error

    res.setHeader('Content-Type', 'text/plain');

    res.end("Ruta no encontrada");

  }

});

server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});