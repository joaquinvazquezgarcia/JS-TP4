class Cuenta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresar() {
        const ingreso = parseInt(
            prompt("indique cuanto dinero desea ingresar a su cuenta.")
        );
        this.saldo = this.saldo + ingreso;
        //Suponiendo que para el TP no es estrictamente necesario validar errores de entrada de datos del usuario(?
    }
    retirar() {
        const retiro = parseInt(
            prompt("indique cuanto dinero desea retirar de su cuenta.")
        );
        this.saldo = this.saldo - retiro;
    }
    informar() {
        alert(
            `La cuenta bancaria cuyo titular es "${this.titular}", posee $ ${this.saldo} (Pesos Argentinos)`
        );
    }
}

const persona = new Cuenta("Alex");

let continuar = true;
while (continuar) {
    let eleccionUsuario = prompt(
        'Ingrese la palabra "ingresar" para realizar un ingreso de saldo a su cuenta, Ingrese la palabra "retirar" para realizar un retiro de saldo de su cuenta, Ingrese la palabra "informacion" para obtener información de su cuenta'
    );
    if (eleccionUsuario == "ingresar") {
        persona.ingresar();
    } else if (eleccionUsuario == "retirar") {
        persona.retirar();
    } else if (eleccionUsuario == "informacion") {
        persona.informar();
    } else if (eleccionUsuario == null) {
        continuar = false;
    } else {
        alert(
            "Parece que el texto ingresado no es valido, intente nuevamente por favor y evite las mayusculas, acentos y caracteres especiales."
        );
    }
}
