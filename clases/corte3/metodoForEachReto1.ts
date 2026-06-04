/* Notas con estado
Tienes un array con las notas finales de 6 estudiantes. Usa forEach para imprimir
cada nota junto a su número de estudiante y un mensaje: APROBADO si es 3.0 o
más, REPROBADO en otro caso. */

const notasFinales = [2.5, 3.0, 4.5, 1.0, 3.8, 2.0];
notasFinales.forEach((nota, index) => {
  const estado = nota >= 3.0 ? "APROBADO" : "REPROBADO";
  console.log(`Estudiante ${index + 1}: Nota ${nota} - ${estado}`);
});

