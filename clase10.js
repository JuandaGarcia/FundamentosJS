var Juan = {
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: 19,
    Programador: true,
    cocinero: false,
    cantatante: false,
    dj: true,
    guitarrista: false,
    drone: true
}

function ImprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    if (persona.Programador){
        console.log('Programador')
    }else{
        console.log('No es Programador')
    }

    if (persona.cocinero){
        console.log('cocinero')
    }

    if (persona.cantatante){
        console.log('cantatante')
    }

    if (persona.dj){
        console.log('dj')
    }

    if (persona.guitarrista){
        console.log('guitarrista')
    }

    if (persona.drone){
        console.log('drone')
    }
}

ImprimirProfesiones(Juan)

const MAYORIA_DE_EDAD = 18

/* function EsMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
} */

//var
/* const EsMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
} */

//otra forma
/* const EsMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
} */

//cuando hay un  solo parametro en la funcion se  pueden quitar los parentesis
/* const EsMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
} */

//si una funcion solo retorna algo se le puede quitar las llaves y el return (arrow function)
//const EsMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//desestructurando el objeto
const EsMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const EsMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

function imprimirSiEsMayor(persona){
    if(EsMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayor(Juan)

function PermitirAcceso(persona){
    if(!EsMayorDeEdad(persona)){
        console.log('Acceso denegado')
    }
    if(!EsMenorDeEdad(persona)){
        console.log('Permitiendo el acceso')
    }
} 

PermitirAcceso(Juan)