import {CuentaCorriente} from './CuentaCorriente.js'
import {Cliente} from './Cliente.js'

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

let saldo = cuentaDeLeonardo.verSaldo(); 

let parametroValor = 100;

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas);

console.log(CuentaCorriente.cantidadCuentas);