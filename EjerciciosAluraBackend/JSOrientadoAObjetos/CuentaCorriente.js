export class CuentaCorriente
{
    // si quisiera crear alguna variable privada podria utilizar # aunque aun no es convencion, la convencion ahora es poner _variable
    // ejemplo #saldo; (este numeral debe utilizarse cada que utilices dicha variable)
    
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor) {
        // if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    // Si no se utiliza el constructor las variables seran indefinidas al no estar inicializadas.
    constructor(cliente, numero, agencia){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor){
        if(valor>0) this.#saldo += valor;
        else console.warn("El deposito que intentas hacer es negativo");
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if(valor <= this.#saldo) this.#saldo -= valor;
        else console.warn("Estas intentando retirar un monto mayor a tu saldo");
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}

