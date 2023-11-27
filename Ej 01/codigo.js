const auto = {
    color: "rojo",
    marca: "Renault",
    modelo: "12",
    estado: "apagado",
    encender: () => {
        this.estado == "apagado"
            ? (document.write("<br/>Has encendido el auto."),
              (this.estado = "encendido"))
            : document.write("<br/>Ya está encendido.");
    },
    apagar: () => {
        this.estado == "encendido"
            ? (document.write("<br/>Has apagado el auto."),
              (this.estado = "apagado"))
            : document.write("<br/>Ya está apagado.");
    },
};
