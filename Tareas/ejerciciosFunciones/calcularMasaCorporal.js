function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    
    let resultado = (imc < 18.5) ? "Bajo peso" : 
                    (imc < 25) ? "Peso normal" : "Sobrepeso"
    
    return `Tu IMC es ${imc}. Estado: ${resultado}`
}

console.log(calcularIMC(70, 1.75));