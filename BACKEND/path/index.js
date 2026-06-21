const fs = require('fs')

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
