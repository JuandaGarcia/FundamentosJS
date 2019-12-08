class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre, apellido} = this

        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            responderSaludo(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura >= 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, lenguaje){
        super(nombre, apellido, altura)
        this.lenguaje = lenguaje
    }

    saludar(fn) {
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre, apellido} = this

        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            responderSaludo(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)

    if (esDev) {
        console.log('no sabia que eras desarrollador')
    }
}

var laura = new Persona('Laura','Garcia', 1.6)
var Ricardo = new Persona('Ricardo','Garcia', 1.8)
var Juan = new Desarrollador('Juan','Garcia', 1.8, 'js')

laura.saludar()
Ricardo.saludar(responderSaludo)
Juan.saludar(responderSaludo)
