function factorial (n: number): number {
    if (n < 0) {
        throw new Error("El número debe ser no negativo");
    }
    if ((n === 0) || (n === 1)) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Imprime 120