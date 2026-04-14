let numeros = [] // vacio
numeros.push (3)
numeros.push (5)
console.log(numeros)

let numeros2 = [2, 5]
numeros.push (3)
numeros.push (5)
numeros.pop () //Borra el ultimo dato de la lista
numeros.splice(1,1)//Elimina .splice(1(desde donde empieza), Cantidad a eliminar)
console.log(numeros2.length)
console.log(numeros.at(-2))
console.log(numeros2)
console.log(numeros.indexOf(5))

let numeros3 = [2, 3, 5, 9, 10]
let arrayTransformado = numeros3.map(x => x ** 2) // Multiplica cada elemento por 2
console.log(arrayTransformado)

let arrayTransformado2 = numeros3.filter(x => x > 5 ? x *2 : x) // Filtra solo los números pares
console.log(arrayTransformado2)

