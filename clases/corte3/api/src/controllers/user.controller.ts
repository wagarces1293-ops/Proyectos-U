import { Request, Response } from 'express';
import { Usuario } from '../models/user.model';

export class UserController {
  // Simulamos una base de datos en memoria con tipado estricto
  private usuarios: Usuario[] = [
    new Usuario(1, "Carlos Garces", "carlos@mail.com"),
    new Usuario(2, "Laura Gomez", "laura@mail.com")
  ];

  // Endpoint GET: Obtener todos los usuarios
  public getUsuarios = (req: Request, res: Response): void => {
    res.status(200).json(this.usuarios);
  };

  // Endpoint POST: Crear un nuevo usuario
  public createUsuario = (req: Request, res: Response): void => {
    const { nombre, email } = req.body;
    const nuevoId = this.usuarios.length + 1;
    
    const nuevoUsuario = new Usuario(nuevoId, nombre, email);
    this.usuarios.push(nuevoUsuario);
    
    res.status(201).json({ mensaje: "Usuario creado", usuario: nuevoUsuario });
  };
}