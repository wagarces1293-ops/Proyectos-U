/* Modelo de Vehículo
Crea una interface Vehiculo con placa (readonly), marca, modelo, año, kilometraje
y disponible. Luego crea tres objetos de tipo Vehiculo y muéstralos en consola con
un mensaje formateado por cada uno indicando su estado de disponibilidad. */
interface Vehiculo {// Define la interface Vehiculo con las propiedades especificadas
    readonly placa: string;// readonly para que la placa no pueda ser modificada después de su asignación inicial
    marca: string;
    modelo: string;
    year: number;
    kilometraje: number;
    disponible: boolean;// disponible es un booleano que indica si el vehículo está disponible o no
}
// Crea tres objetos de tipo Vehiculo con los datos correspondientes
const vehiculo1: Vehiculo = {
    placa: "ABC123",
    marca: "Toyota",
    modelo: "Camry",
    year: 2020,
    kilometraje: 15000,
    disponible: true
};
const vehiculo2: Vehiculo = {
    placa: "XYZ789",
    marca: "Honda",
    modelo: "Civic",
    year: 2019,
    kilometraje: 20000,
    disponible: false
};
const vehiculo3: Vehiculo = {
    placa: "DEF456",
    marca: "Ford",
    modelo: "Focus",
    year: 2021,
    kilometraje: 5000,
    disponible: true
};
// Muestra en consola un mensaje formateado por cada vehículo indicando su estado de disponibilidad
console.log(`El vehículo ${vehiculo1.marca} ${vehiculo1.modelo} con placa ${vehiculo1.placa} está ${vehiculo1.disponible ? "disponible" : "no disponible"}.`);
console.log(`El vehículo ${vehiculo2.marca} ${vehiculo2.modelo} con placa ${vehiculo2.placa} está ${vehiculo2.disponible ? "disponible" : "no disponible"}.`);
console.log(`El vehículo ${vehiculo3.marca} ${vehiculo3.modelo} con placa ${vehiculo3.placa} está ${vehiculo3.disponible ? "disponible" : "no disponible"}.`);