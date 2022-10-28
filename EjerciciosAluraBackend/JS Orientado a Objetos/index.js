class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    // si quisiera crear alguna variable privada podria utilizar # aunque aun no es convencion, la convencion ahora es poner _variable
    // ejemplo #saldo; (este numeral debe utilizarse cada que utilices dicha variable)
    
    numero;
    saldo;
    agencia;

    // Si no se utiliza el constructor las variables seran indefinidas al no estar inicializadas.
    constructor(){
        this.saldo = 0;
        this.numero = "";
        this.agencia = "";
    }

    depositoEnCuenta(valor){
        if(valor>0) this.saldo += valor;
        else console.warn("El deposito que intentas hacer es negativo");
    }

    retirarDeCuenta(valor){
        if(valor <= this.saldo) this.saldo -= valor;
        else console.warn("Estas intentando retirar un monto mayor a tu saldo")
    }
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "133434"

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia = 1001

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.rutCliente = "V1380405"

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 1002

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
console.log("Deposito a cuenta corriente 2, ahora tiene: ")
cuentaCorriente2.depositoEnCuenta(100)
console.log(cuentaCorriente2);
console.log("Retiro a cuenta corriente 2, ahora tiene: ")
cuentaCorriente2.retirarDeCuenta(2000)
console.log(cuentaCorriente2);
