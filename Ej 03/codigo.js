class Rectangulo {
    constructor(alto = 0, ancho = 0) {
        this.alto = alto;
        this.ancho = ancho;
    }

    //Los métodos solo cumplen con lo justo y necesario, entiendo que al ser un tp no hace falta validar todas las entradas de datos
    modificarAltura() {
        const nuevaAltura = parseInt(
            prompt("Ingrese la nueva altura del rectangulo")
        );
        this.alto = nuevaAltura;
    }
    modificarAncho() {
        const nuevoAncho = parseInt(
            prompt("Ingrese el nuevo ancho del rectangulo")
        );
        this.ancho = nuevoAncho;
    }
    mostrar() {
        alert(
            `El rectangulo cuenta con una altura de ${this.alto} cm y un ancho de ${this.ancho} cm`
        );
    }
    calcPerimetro() {
        alert(
            `El perimetro del rectangulo es igual a ${
                this.alto * 2 + this.ancho * 2
            } cm`
        );
    }
    calcArea() {
        alert(
            `El area del rectangulo es igual a ${this.alto * this.ancho} cm2`
        );
    }
}

const rectangulo = new Rectangulo();

let continuar = true;
while (continuar) {
    let opciones = prompt(
        'Ingrese la palabra "mostrar" para mostrar información del rectángulo, Ingrese la palabra "alto" para modificar la altura del rectángulo, Ingrese la palabra "ancho" para modificar el ancho del rectángulo, Ingrese la palabra "perimetro" para calcular el perimetro del rectángulo, Ingrese la palabra "area" para calcular el area del rectángulo.'
    );

    switch (opciones) {
        case "mostrar":
            rectangulo.mostrar();
            break;
        case "alto":
            rectangulo.modificarAltura();
            break;
        case "ancho":
            rectangulo.modificarAncho();
            break;
        case "perimetro":
            rectangulo.calcPerimetro();
            break;
        case "area":
            rectangulo.calcArea();
            break;
        case null:
            continuar = false;
            break;

        default:
            alert(
                "Parece que hubo un error; intente nuevamente e intente evitar mayusculas, signos de puntuación y caracteres especiales."
            );
            break;
    }
}
