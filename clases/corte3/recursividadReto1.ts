/**
 * Calcula la potencia de un número de forma recursiva.
 * * @param base - El número que se multiplicará.
 * @param exponente - La cantidad de veces que se multiplica la base.
 * @returns El resultado de base^exponente.
 */
function potencia(base: number, exponente: number): number {
    // Caso base: Cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    
    // Caso recursivo: base * base^(exponente - 1)
    return base * potencia(base, exponente - 1);
}

// --- Pruebas con diferentes valores ---

const prueba1 = potencia(2, 3);   // 2 * 2 * 2 = 8
const prueba2 = potencia(5, 2);   // 5 * 5 = 25
const prueba3 = potencia(10, 4);  // 10 * 10 * 10 * 10 = 10000

console.log(`2 elevado a 3 es: ${prueba1}`);
console.log(`5 elevado a 2 es: ${prueba2}`);
console.log(`10 elevado a 4 es: ${prueba3}`);