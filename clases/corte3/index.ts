export {}; // Esto convierte el archivo en un módulo aislado

interface Direccion {
    calle: string;
    numero: number;
    ciudad: string;
    pais?: string; // Propiedad opcional
}

interface envio {
   readonly destinatario: string;// Propiedad de solo lectura
   direccion: Direccion;
   fechaInicio: Date;
   costoEnvio: number;
}
interface envioExpress extends envio {
    tiempoEntrega: number; // Tiempo de entrega en horas
}
const envio1: envio = {
    destinatario: "Juan Perez",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123,
        ciudad: "Springfield",
        pais: "USA"
    },
    fechaInicio: new Date("2024-06-01"),
    costoEnvio: 15.99
};
/* Intentar modificar la propiedad de solo lectura (esto causará un error de compilación)
 Una interfas es una estructura que define la forma de un objeto, pero no puede ser instanciada directamente. 
 En este caso, estamos creando un objeto que cumple con la interfaz "envio". La propiedad "destinatario" es de 
 solo lectura, lo que significa que no se puede modificar después de haber sido asignada. Si intentamos cambiar 
 el valor de "destinatario", TypeScript generará un error de compilación, ya que viola la restricción de solo 
 lectura definida en la interfaz.
 envio1.destinatario = "María García"; // Error de compilación    */
console.log(envio1);
