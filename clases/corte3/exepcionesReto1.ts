/* Cajero con validación de saldo
Crea una función retirar(saldo, monto) que devuelva el nuevo saldo. Debe lanzar
una excepción si el monto es negativo o si supera el saldo disponible. Usa try/catch
para hacer tres retiros: uno válido, uno con monto negativo y uno mayor al saldo. */ 

function retirar(saldo: number, monto: number): number {
    if (monto < 0) {
        throw new Error("El monto no puede ser negativo");
    }
    if (monto > saldo) {
        throw new Error("El monto supera el saldo disponible");
    }
    return saldo - monto;
}
const saldoInicial = 1000;
try {
    console.log("Saldo después del retiro válido:", retirar(saldoInicial, 200)); // Debería imprimir 800   
    console.log("Saldo después del retiro con monto negativo:", retirar(saldoInicial, -50)); // Esto lanzará un error
    console.log("Saldo después del retiro con monto mayor al saldo:", retirar(saldoInicial, 1500)); // Esto también lanzará un error
} catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Ocurrió un error desconocido");
    }
}