function costoViaje(distancia, kmPorLitro, precioLitro) {
    let litrosNecesarios = distancia / kmPorLitro
    return litrosNecesarios * precioLitro
}

let distancia = 300 // km
let eficiencia = 15;// km/l
let precio = 16500   // dinero por litro
// o console.log(`El viaje costará: $${costoViaje(300,15,16500)}`)
console.log("El viaje costará: $" + costoViaje(distancia, 
    eficiencia, precio))