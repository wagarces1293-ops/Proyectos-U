/* Validador de contraseñas
Tienes un array de contraseñas registradas en un sistema. Usa every para validar
que TODAS tengan al menos 8 caracteres. Usa some para verificar si ALGUNA
contiene la palabra 'admin'. Imprime ambos resultados. */
const contrasenas = ["password123", "admin2024", "userpass", "admin1234", "securepass"];
const todasValidas = contrasenas.every(contrasena => contrasena.length >= 8);
const algunaAdmin = contrasenas.some(contrasena => contrasena.includes("admin"));
console.log(`Todas las contraseñas son válidas: ${todasValidas}`);
console.log(`Hay al menos una contraseña con 'admin': ${algunaAdmin}`);