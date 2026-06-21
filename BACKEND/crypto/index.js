// metodo para ocultar las contrasenias
const crypto = require('crypto')

// se crea el hash y se guarda en miTextoSecreto
const hash= crypto.createHash('sha256').update('miTextoSecreto').digest('hex');
console.log(hash);
// se guarda asi:
//6d24e7c922308514509e5b47d354b5c35b6a13aceedb448664d83c093a0e9463
// si se le cambia un solo valor a miTexto secreto, el hash cambia completamente


//INFO
/* 
SHA256 Rápido es susceptible a brute force moderno, no ideal para passwords.

bcrypt
argon2
scrypt

librerias opensource
 */