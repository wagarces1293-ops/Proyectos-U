/* Tarjetas de empleados
Dado un array de objetos empleado con nombre, cargo y salario, usa map para
generar un nuevo array de strings con el formato '🏷 Nombre - Cargo - $Salario'.
Imprime cada tarjeta resultante. */ 

const empleados = [
  { nombre: "Carlos", cargo: "Desarrollador", salario: 50000 },
  { nombre: "Laura", cargo: "Diseñadora", salario: 45000 },
  { nombre: "Miguel", cargo: "Gerente", salario: 60000 }
];
const tarjetasEmpleados = empleados.map(
  (empleado) => `🏷 ${empleado.nombre} - ${empleado.cargo} - $${empleado.salario}`
);
tarjetasEmpleados.forEach((tarjeta) => console.log(tarjeta));
