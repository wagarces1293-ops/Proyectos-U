/* Ficha de un libro
Crea un type Libro con: isbn (readonly), titulo, autor, paginas, anio, generos (array
opcional de strings). Crea dos libros, modifica el año del primero, agrega un género
al segundo, y muestra ambos con todas sus propiedades. */
type Libro = {
  readonly isbn: string;
  titulo: string;
  autor: string;
  paginas: number;
  anio: number;
  generos?: string[];
};
const libro1: Libro = {
  isbn: "978-3-16-148410-0",
  titulo: "El Gran Gatsby",
  autor: "F. Scott Fitzgerald",
  paginas: 180,
  anio: 1925
};
const libro2: Libro = {
  isbn: "978-0-7432-7356-5",
  titulo: "1984",
  autor: "George Orwell",
  paginas: 328,
  anio: 1948
};
libro1.anio = 1926; // Modificando el año del primer libro
libro2.generos = ["Distopía", "Ciencia ficción"];
console.log(libro1);
console.log(libro2);