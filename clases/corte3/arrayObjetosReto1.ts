/* Reporte de cursos
Crea un array de 5 cursos con: codigo, nombre, creditos, aprobado (boolean).
Imprime todos los cursos formateados. Filtra los aprobados, calcula el total de
créditos aprobados y muestra el porcentaje de cursos aprobados respecto al total. */
interface Curso {
  codigo: string;
  nombre: string;
  creditos: number;
  aprobado: boolean;
}
const cursos: Curso[] = [
  { codigo: "CS101", nombre: "Introducción a la Programación", creditos: 3, aprobado: true },
  { codigo: "CS102", nombre: "Estructuras de Datos", creditos: 4, aprobado: false },
  { codigo: "CS103", nombre: "Algoritmos", creditos: 3, aprobado: true },
  { codigo: "CS104", nombre: "Base de Datos", creditos: 4, aprobado: false },
  { codigo: "CS105", nombre: "Redes de Computadoras", creditos: 3, aprobado: true }
];
cursos.forEach(curso => {
  console.log(`Código: ${curso.codigo}, Nombre: ${curso.nombre}, Créditos: ${curso.creditos}, Aprobado: ${curso.aprobado}`);
});
const cursosAprobados = cursos.filter(curso => curso.aprobado);
const totalCreditosAprobados = cursosAprobados.reduce((sum, curso) => sum + curso.creditos, 0);
const porcentajeAprobados = (cursosAprobados.length / cursos.length) * 100;
console.log(`Total de créditos aprobados: ${totalCreditosAprobados}`);
console.log(`Porcentaje de cursos aprobados: ${porcentajeAprobados.toFixed(2)}%`);  