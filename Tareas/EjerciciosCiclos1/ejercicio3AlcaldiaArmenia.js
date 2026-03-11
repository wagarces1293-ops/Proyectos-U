/* La Alcaldía de Armenia implementa un programa de bienestar para 
el adulto mayor. 
El beneficio se calcula sobre el salario mínimo vigente ($1.300.000 COP)
así: Adultos entre 60 y 80 años: reciben el 12% del salario mínimo 
como ayuda mensual. Adultos mayores de 80 años: reciben el 15% del 
salario mínimo como ayuda mensual. Personas menores de 60 años: no 
aplican al programa. El sistema debe registrar un grupo de personas y 
generar estadísticas completas al final. */

let cantidadPersonas = 1
let nombre = ""
let edad 
let salarioMinimo = 1300000
let porcentaje = 0
let subsidio = 0
let categoria
let contBeneficiarios60_80 = 0
let contBeneficiariosMayor80 = 0
let contNoAplica = 0
let presupuestoTotal = 0
let presupuestoADM = 0
let presupuestoADMS = 0
const prompt = require('prompt-sync')();
//const nombre = prompt("¿Cómo te llamas? ");

cantidadPersonas = Number(prompt(`¿Cuantas personas va a registrar?`))
for (let i = 0 ; i < cantidadPersonas ; i++ ) {
    nombre = String(prompt(`Ingrese su nombre completo:`))
    edad = Number(prompt(`Ingrese su edad:`))
    if (edad >= 60 && edad <=80){
        subsidio = salarioMinimo * 0.12
        presupuestoADM = subsidio
        contBeneficiarios60_80 ++
        porcentaje = "12%"
        categoria = "Adulto Mayor"
    }
    else if (edad > 80) {
        subsidio = salarioMinimo * 0.15
        presupuestoADMS = subsidio
        contBeneficiariosMayor80 ++

        porcentaje = "15%"
        categoria = "Adulto Mayor Senior"   
    }
    else if (edad < 60){
        console.log("NO APLICA")
        contNoAplica ++
        subsidio = 0
        porcentaje = "No Aplica"
        categoria = "No Aplica"
    }
    (edad >= 60 && edad <= 80)? console.log(`Adulto Mayor`) : (edad > 80)? console.log(`Adulto Mayor Senior`) : console.log (``)
    presupuestoTotal += subsidio
    console.log(`Persona ${i + 1}: ${nombre}`)
    console.log(`Edad: ${edad}`)
    console.log(`Categoria:${categoria}`)
    console.log(`Subsidio (${porcentaje}): ${subsidio}`)
    console.log(`Cantidad de Beneficiarios Adulto Mayor: ${contBeneficiarios60_80}`)
    console.log(`Cantidad Beneficiarios Adulto Mayor Senior: ${contBeneficiariosMayor80}`)
    console.log(`Cantidad no Aplica: ${contNoAplica}`)
}

console.log("=== INFORME ALCALDIA DE ARMENIA ===")
console.log(`Total Registrados: ${cantidadPersonas}`)
console.log(`Beneficiarios (60-80) años: ${contBeneficiarios60_80} -- Subsidio: $${presupuestoADM} c/u`)
console.log(`Beneficiarios (>80) años: ${contBeneficiariosMayor80} -- Subsidio $${presupuestoADMS} c/u`)
console.log(`No aplican: ${contNoAplica}`)
console.log(`Presupuesto Total: $${presupuestoTotal}`)

