const prompt = require('prompt-sync')();
let numeros = [1, 2, 3, 4, 5]
let filtrados = numeros.filter(x => x > 3 && x < 8) // Filtra los números mayores a 3
console.log(filtrados)

let clientes = []
// solicitamos nombre al usuario y lo almacenamos en la lista
const nombre = String(prompt("Ingrese su nombre: "));
clientes.push(nombre);
clientes.push("Camila");
clientes.push("Sofia");
clientes.push("Valentina");
clientes.push("Wilma");

let filtrar = clientes.filter(cliente => cliente.startsWith("S") && cliente.endsWith("a")); // Filtra los clientes que empiezan con S y terminan con a
// Mostrar cada cliente filtrado en consola
filtrar.forEach(cliente => console.log(cliente));
console.log(filtrar);//