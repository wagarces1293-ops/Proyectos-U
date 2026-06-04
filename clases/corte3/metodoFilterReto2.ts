/* Estudiantes destacados
Tienes un array de estudiantes con nombre, promedio y asistencia. Filtra los que
tienen promedio mayor o igual a 4.0 Y asistencia mayor a 90%. Muestra cuántos
cumplen y sus nombres separados por coma. */
const estudiantes = [
  { nombre: "Juan", promedio: 4.5, asistencia: 95 },
  { nombre: "María", promedio: 3.8, asistencia: 92 },
  { nombre: "Pedro", promedio: 4.2, asistencia: 91 },
  { nombre: "Ana", promedio: 4.0, asistencia: 93 }
];
const estudiantesDestacados = estudiantes.filter(
  (estudiante) => estudiante.promedio >= 4.0 && estudiante.asistencia > 90
);
const cantidadDestacados = estudiantesDestacados.length;
const nombresDestacados = estudiantesDestacados
  .map((estudiante) => estudiante.nombre)
  .join(", ");
console.log(`Cantidad de estudiantes destacados: ${cantidadDestacados}`);
console.log(`Nombres de estudiantes destacados: ${nombresDestacados}`);
