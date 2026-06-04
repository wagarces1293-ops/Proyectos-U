// Interfaz para definir el tipo de datos estricto
export interface IUser {
  id: number;
  nombre: string;
  email: string;
}

// Clase que aplica encapsulamiento (POO)
export class Usuario implements IUser {
  // Modificadores de acceso (private)
  constructor(
    public id: number,
    public nombre: string,
    public email: string
  ) {}
}