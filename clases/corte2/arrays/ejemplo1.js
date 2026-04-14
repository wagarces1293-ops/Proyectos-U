let nombres= ["Wilma", "Sofia", "Valentina", "Camila"]
arrayTransformado = nombres.map(x => x.length >4 ? x.toUpperCase() : x.toLowerCase())// Si el nombre tiene mas de 4 letras lo convierte a mayuscula, sino lo deja en minuscula.
console.log(arrayTransformado)