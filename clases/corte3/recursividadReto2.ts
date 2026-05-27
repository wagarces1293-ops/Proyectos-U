/* Cuenta regresiva recursiva
Crea una función recursiva cuentaRegresiva(n) que imprima los números desde n
hasta 1, y al llegar a 0 imprima ¡Despegue!. No uses ningún ciclo (for, while).
Pruébala con n igual a 10. */ 
function cuentaRegresiva(n: number): void {
    if (n > 0) {
        console.log(n);
        cuentaRegresiva(n - 1); // Llamada recursiva con n decrecido
    } else {
        console.log("¡Despegue!"); // Caso base: cuando n llega a 0
    }
}
cuentaRegresiva(10);    
