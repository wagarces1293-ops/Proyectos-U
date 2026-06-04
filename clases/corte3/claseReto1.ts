/* Clase Libro
Crea una clase Libro con propiedades: titulo, autor, paginas, prestado. Incluye un
constructor que reciba los tres primeros (prestado inicia en false). Métodos:
prestar(), devolver() y estado() que imprima el estado actual. Crea dos libros y
pruébalo. */
class Libro {
  titulo: string;
  autor: string;
  paginas: number;
  prestado: boolean;

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.prestado = false;
  }

  prestar() {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  }

  devolver() {
    if (this.prestado) {
      this.prestado = false;
      console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
      console.log(`El libro "${this.titulo}" no estaba prestado.`);
    }
  }

  estado() {
    console.log(`Libro: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
    console.log(`Estado: ${this.prestado ? "Prestado" : "Disponible"}`);
  }
}