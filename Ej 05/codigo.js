class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }

    mostrarGeneracion() {
        const generaciones = {
            z: ["Z", "Irreverencia"],
            y: ["Y", "Frustración"],
            x: ["X", "Obsesión por el exito"],
            boom: ["Baby Boom", "Ambición"],
            silent: ["Silent", "Austeridad"],
        };

            if ( 1948 < this.nacimiento && this.nacimiento > 1930) {
                alert(
                    `${this.nombre} pertenece a la generación ${generaciones.silent[0]} y su rango caracteristico es "${generaciones.silent[1]}"`
                );
            }
                
            else if (1968 < this.nacimiento && this.nacimiento > 1949) {
                alert(
                    `${this.nombre} pertenece a la generación ${generaciones.boom[0]} y su rango caracteristico es "${generaciones.boom[1]}"`
                );

            }
            else if (1980 < this.nacimiento && this.nacimiento > 1969) {
                alert(
                    `${this.nombre} pertenece a la generación ${generaciones.x[0]} y su rango caracteristico es "${generaciones.x[1]}"`
                );

            }
            else if (1993 < this.nacimiento && this.nacimiento > 1981) {
                alert(
                    `${this.nombre} pertenece a la generación ${generaciones.y[0]} y su rango caracteristico es "${generaciones.y[1]}"`
                );

            }
            else if (2010 < this.nacimiento && this.nacimiento > 1994) {
                alert(
                    `${this.nombre} pertenece a la generación ${generaciones.z[0]} z su rango caracteristico es "${generaciones.y[1]}"`
                );

            }
            else{
                alert(this.nacimiento)

            }
        }
    }
    esMayor() {}
    mostrarDatos() {}
    generaDNI() {}
}

let persona = new Persona("joaquin", 22, 432342342, "h", 189, 189, 2001);
persona.mostrarGeneracion();
