class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos() {
        document.write(
            `<br>*El producto "${this.nombre}" de código "${this.codigo}", tiene un precio de $${this.precio}.`
        );
    }
}

const producto1 = new Producto("2384", "Arroz chino", 255);
const producto2 = new Producto("1254", "Salsa de soja", 525);
const producto3 = new Producto("5243", "Pepino", 70);

const productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimirDatos();
}
