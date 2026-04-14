Operadores de javascript 

1. Operadores Aritmetricos.

+=   Suma y asigna        x += 5
-=   Resta y asigna       x -= 2
*=   Multiplica y asigna  x *= 3
/=   Divide y Asigna      x /= 2
%=   Modulo (Residuo)     x %= 3
**=  Exponente y Asigna   x **= 2

2. Operadores de Comparacion. Sirven para tomar decisiones. Devuelven siempre un booleano (true o false).

Igualdad               ==     No es estrictocon el tipo
Igualdad estricta      ===    Compara valor y tipo de dato
Diferente              !=
Diferente Estricto     !==    Compara valor y tipo
Mayor que              >
Menor que              <
Mayor o igual          >=
Menor o igual          <=

3. Operadores Lógicos: Se usan para combinar múltiples condiciones.

Y(and)  &&   Verdadero solo si todas las condiciones se cumplen.
O(or)   ||   Verdadero si al menos una condicion se cumple.
Negación !   Invierte el valor (Si era true pasa a ser false).
Ejemplo:
let tieneEntrada = true
let mayorDeEdad = false
let tieneInvitacionEspecial = true
let puedeEntrar = tieneEntrada && mayorDeEdad  (false)
let accesoPermitido = mayorDeEdad || tieneInvitacionEspecial  (true)
let bloqueado = !tieneEntrada (false)

4. Operador Ternario: Sirve para asignar valor basado en una condición.

Ejemplo:

let edad = 18
let mensaje = (edad >= 18)? "Adulto" : "Menor"

