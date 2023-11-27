const auto = {
    color: "rojo",
    marca: "Renault",
    modelo: "12",
    estado: "apagado",
    encender: function () {
        this.estado == "apagado"
            ? (alert("Has encendido el auto."), (this.estado = "encendido"))
            : alert("Ya está encendido.");
    },
    apagar: function () {
        this.estado == "encendido"
            ? (alert("Has apagado el auto."), (this.estado = "apagado"))
            : alert("Ya está apagado.");
    },
};

alert(
    `El auto es de color ${auto.color}. La marca es "${auto.marca}" y el modelo "${auto.modelo}". En este momento el auto se encuentra ${auto.estado}`
);

let valor = true;
while (valor) {
    let pregunta = prompt(
        'Si quiere encenderlo, escriba "encender", si quiere apagarlo escriba "apagar". Si quiere salir escribe "salir" o presiona "cancelar".'
    );
    if (pregunta == "encender") {
        auto.encender();
    } else if (pregunta == "apagar") {
        auto.apagar();
    } else if (pregunta == "salir" || pregunta == null) {
        valor = false;
    } else {
        alert(
            'parece que hubo un error, intente escribir solamente "encender" o "apagar"'
        );
    }
}
