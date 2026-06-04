    /* Convertidor de temperaturas
    Tienes un array con temperaturas en grados Celsius. Usa map para crear un nuevo
    array con esas mismas temperaturas convertidas a Fahrenheit con la fórmula F =
    C × 9/5 + 32. Muestra ambos arrays. */
    const temperaturasCelsius = [0, 20, 37, 100];
    const temperaturasFahrenheit = temperaturasCelsius.map(
    (celsius) => celsius * (9 / 5) + 32
    );
    console.log("Temperaturas en Celsius:", temperaturasCelsius);
    console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);
