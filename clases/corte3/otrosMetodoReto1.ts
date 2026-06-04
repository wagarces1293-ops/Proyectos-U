/* Buscador de empleados
Tienes un array de empleados con id, nombre y cargo. Usa find para encontrar al
empleado con id 5. Usa findIndex para saber su posición. Usa some para verificar
si existe algún 'Gerente'. Imprime los resultados. */
const empleados = [
  { id: 1, nombre: "Carlos", cargo: "Desarrollador" },
  { id: 2, nombre: "Laura", cargo: "Diseñadora" },
  { id: 3, nombre: "Miguel", cargo: "Marketing" },
  { id: 4, nombre: "Ana", cargo: "Recursos Humanos" },
  { id: 5, nombre: "Elena", cargo: "Gerente" }
];

const empleado = empleados.find(emp => emp.id === 5);
const posicion = empleados.findIndex(emp => emp.id === 5);
const hayGerente = empleados.some(emp => emp.cargo === "Gerente");

console.log(`Empleado con id 5: ${empleado ? empleado.nombre : "No encontrado"}`);
console.log(`Posición del empleado con id 5: ${posicion}`);
console.log(`Hay algún Gerente: ${hayGerente}`);