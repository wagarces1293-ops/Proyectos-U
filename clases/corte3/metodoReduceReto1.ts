/* Promedio de un curso
Tienes un array con las notas de 10 estudiantes. Usa reduce para calcular la suma
total. Divide por la longitud para obtener el promedio. Muestra tanto la suma como
el promedio con dos decimales. */
const notas = [3.5, 4.0, 2.8, 3.9, 4.5, 3.2, 4.8, 2.5, 3.7, 4.1];
const sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = sumaTotal / notas.length;
console.log(`Suma total: ${sumaTotal.toFixed(2)}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);