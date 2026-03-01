/* "Burger Palace" es un restaurante de comidas rápidas que ofrece 
únicamente 3 combos: 
Combo 1 — "Clásica" (hamburguesa sencilla + papas + gaseosa): $15.000 
Combo 2 — "Doble Poder" (hamburguesa doble + papas grandes + gaseosa): 
$22.000 
Combo 3 — "Mega Fest" (hamburguesa triple + papas + malteada + 
postre): $35.000 
El sistema permite tomar pedidos de forma continua 
hasta que el usuario decida finalizar. Debe calcular el total acumulado de la cuenta a medida que se 
agregan combos. */

let opcion
let cantidadCombo = 0
let precioCombo = 0
let subTotal = 0
let totalCuenta = 0
let totalCombos = 0
let contadorCombo1 = 0
let contadorCombo2 = 0
let contadorCombo3 = 0
console.log(`====== BURGUER PALACE ======
    1. Clasica - $15.000
    2. Doble Poder - $22.000
    3. Mega Fest - $35.000
    4. Finalizar pedido.`)
do{
    opcion = prompt(`Ingrese su pedido: `)//Dentro del ciclo, solicita 
    // al usuario que seleccione un combo (1, 2, 3 o 4).
if (opcion == 1){
    precioCombo = 15000
    cantidadCombo += Number(prompt(`Ingrese Cantidad Combo 1:`))
    contadorCombo1 +=cantidadCombo


}
else if (opcion == 2){
    precioCombo = 22000
    cantidadCombo += Number(prompt(`Ingrese Cantidad Combo 2:`))
    contadorCombo2 += cantidadCombo
}
else if (opcion == 3){
    precioCombo = 35000
    cantidadCombo += Number(prompt(`Ingrese Cantidad Combo 3:`))
    contadorCombo3 += cantidadCombo
}
else if (opcion == 4){
    break
}
else{
    console.log(`Opcion no valida.`)
    continue
}
subTotal = precioCombo * cantidadCombo
totalCombos += cantidadCombo    
totalCuenta += subTotal
console.log(`Combo: ${opcion}`)
console.log(`Cantidad: ${cantidadCombo}`)
console.log(`Subtotal: ${subTotal}`)
console.log(`Total Acumulado: ${totalCuenta}`)



}while (!opcion != "4")
    console.clear
    console.log(`Combos Clasica: ${contadorCombo1}`)
    console.log(`Combos Doble Poder: ${contadorCombo2}`)
    console.log(`Combos Mega Fest: ${contadorCombo3}`)
    console.log(`Total combos: ${totalCombos}`)
    console.log(`Total a pagar: ${totalCuenta}`)
