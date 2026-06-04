/* Clase CuentaBancaria
Crea una clase CuentaBancaria con titular, saldo y numero. El constructor recibe
titular y numero, el saldo inicia en 0. Métodos: depositar(monto), retirar(monto) y
consultarSaldo(). Crea una cuenta, haz dos depósitos y un retiro, muestra el saldo
final. */
class CuentaBancaria {
  titular: string;
  saldo: number;
  numero: string;

  constructor(titular: string, numero: string) {
    this.titular = titular;
    this.numero = numero;
    this.saldo = 0;
  }
  depositar(monto: number) {
    this.saldo += monto;
  }
  retirar(monto: number) {
    if (this.saldo >= monto) {
      this.saldo -= monto;
    }
  }
  consultarSaldo() {
    console.log(`Saldo de ${this.titular}: ${this.saldo}`);
  }
}
