/* Login con validaciones múltiples
Crea una función login(usuario, contraseña) que lance distintos errores: si el
usuario está vacío, si la contraseña tiene menos de 6 caracteres, o si la
combinación no es válida (compara contra valores guardados). Pruébala con tres
escenarios diferentes. */
function login(usuario: string, contraseña: string): void {
    const usuarioGuardado = "admin";
    const contraseñaGuardada = "password123";

    if (!usuario) {// Verificamos si el usuario está vacío
        throw new Error("El usuario no puede estar vacío");
    }

    if (contraseña.length < 6) {// Verificamos la longitud de la contraseña
        throw new Error("La contraseña debe tener al menos 6 caracteres");
    }

    if (usuario !== usuarioGuardado || contraseña !== contraseñaGuardada) {// Verificamos ambas condiciones para la combinación
        throw new Error("La combinación de usuario y contraseña no es válida");
    }

    console.log("Login exitoso");
}
try {    login("", "password123"); // Esto lanzará un error por usuario vacío
} catch (error) {// Solución al error ts(18046): Verificamos si es una instancia de Error
    if (error instanceof Error) {// Ahora TS sabe que .message existe
        console.error("Error:", error.message);
    } else {
        console.error("Ocurrió un error desconocido");
    }
}