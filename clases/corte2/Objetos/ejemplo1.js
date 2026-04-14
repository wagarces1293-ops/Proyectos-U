const cliente = {
    nombre: "Wilma",
    turno: "mañana",
    edad: 25,
    ciudad: "Armenia",
}
let clientes = []
clientes.push(cliente)
clientes.push({
    nombre: "Sofia",
    turno: "tarde",
    edad: 30,
    ciudad: "Armenia"
})
clientes.push({
    nombre: "Valentina",
    turno: "noche",
    edad: 28,
    ciudad: "Armenia"
})
clientes.push({
    nombre: "Camila",
    turno: "mañana",
    edad: 22,
    ciudad: "Armenia"
})
console.log(clientes)
let clientesMañana = clientes.filter(cliente => cliente.turno === "mañana") // Filtra los clientes que tienen turno de mañana
console.log(`Cantidad de clientes : ${clientesMañana.length}`)
let clienteEdad = clientes.filter(clientes => clientes.edad > 60)// Filtra los clientes que tienen mas de 60 años
console.log(`Cantidad de clientes mayores a 60 años: ${clienteEdad.length}`)
