let opcion
let cantidadCombo
let precioCombo
let subTotal
let totalCuenta = 0
let totalCombos = 0
let contadorCombo1 = 0
let contadorCombo2 = 0
let contadorCombo3 = 0

// Función para pausar el ciclo y esperar el dato (Simula el Prompt)
function esperarEntrada(mensaje) {
    document.getElementById('mensajePrompt').innerText = mensaje;
    document.getElementById('valorInput').value = "";
    document.getElementById('valorInput').focus();
    
    return new Promise(resolve => {
        document.getElementById('btnEnviar').onclick = function() {
            resolve(document.getElementById('valorInput').value);
        };
    });
}

async function ejecutarPedido() {
    document.getElementById('btnIniciar').classList.add('hidden');
    document.getElementById('zonaInput').classList.remove('hidden');
    let consola = document.getElementById('consolaSimulada');

    // TU CÓDIGO ORIGINAL DENTRO DEL CICLO
    do {
        opcion = await esperarEntrada("Ingrese su pedido (1, 2, 3 o 4):");

        if (opcion == 1) {
            precioCombo = 15000
            cantidadCombo = Number(await esperarEntrada("Ingrese Cantidad Combo 1:"));
            contadorCombo1 += cantidadCombo
        }
        else if (opcion == 2) {
            precioCombo = 22000
            cantidadCombo = Number(await esperarEntrada("Ingrese Cantidad Combo 2:"));
            contadorCombo2 += cantidadCombo
        }
        else if (opcion == 3) {
            precioCombo = 35000
            cantidadCombo = Number(await esperarEntrada("Ingrese Cantidad Combo 3:"));
            contadorCombo3 += cantidadCombo
        }
        else if (opcion == 4) {
            break
        }
        else {
            consola.innerHTML += `<p style="color:red">Opcion no valida.</p>`;
            continue; 
        }

        subTotal = precioCombo * cantidadCombo
        totalCombos += cantidadCombo    
        totalCuenta += subTotal

        // TUS MENSAJES ORIGINALES (ahora se ven en pantalla)
        consola.innerHTML += `
            <p>Combo: ${opcion}</p>
            <p>Cantidad: ${cantidadCombo}</p>
            <p>Subtotal: ${subTotal}</p>
            <p>Total Acumulado: ${totalCuenta}</p>
            <p>-----------------------</p>
        `;

    } while (opcion != "4")

    // RESULTADOS FINALES AL SALIR DEL CICLO
    document.getElementById('zonaInput').innerHTML = "<h3>PEDIDO FINALIZADO</h3>";
    consola.innerHTML = `
        <p>Combos Clasica: ${contadorCombo1}</p>
        <p>Combos Doble Poder: ${contadorCombo2}</p>
        <p>Combos Mega Fest: ${contadorCombo3}</p>
        <p>Total combos: ${totalCombos}</p>
        <p><strong>Total a pagar: ${totalCuenta}</strong></p>
        <button onclick="location.reload()">Nuevo Pedido</button>
    `;
}