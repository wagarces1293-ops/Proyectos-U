// Calculadora segura con manejo de errores
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

try {
    // Ponemos el código "peligroso" dentro del try
    console.log(dividir(10, 2)); // Imprime 5
    console.log(dividir(10, 0)); // Esto va a lanzar el error e irá al catch
} catch (error) {
    // Solución al error ts(18046): Verificamos si es una instancia de Error
    if (error instanceof Error) {
        console.error("Error:", error.message); // Ahora TS sabe que .message existe
    } else {
        console.error("Ocurrió un error desconocido");
    }
}