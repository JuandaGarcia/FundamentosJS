var Juan = {
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: 19,
    ocupacion: 'Programador'
}

/* function ImprimirMayuscula({nombre}){
    console.log(nombre.toUpperCase())
} */

function ImprimirMayuscula(persona){
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

ImprimirMayuscula(Juan)
ImprimirMayuscula({nombre: 'Pepito'})

/* function ImprimirParrafo(persona){
    console.log('Hola me llamo ' + persona.nombre +" "+  persona.apellido + " y tengo " + persona.edad + " años") 
} */

function ImprimirParrafo(persona){
    var {nombre} = persona
    var {apellido} = persona
    var {edad} = persona
    console.log(`hola me llamo ${nombre} ${apellido} y tengo ${edad} años`) 
}

ImprimirParrafo(Juan)

function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

var nuevaPersona = cumpleaños(Juan)
console.log(Juan)
console.log(nuevaPersona)