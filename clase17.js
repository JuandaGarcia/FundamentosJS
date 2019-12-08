

var Juan = {
    nombre: 'Juan',
    apellido: 'Garcia',
    altura: 1.75
}
var Ricardo = {
    nombre: 'Ricardo',
    apellido: 'Garcia',
    altura: 1.85
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.8

var personas = [Juan, Ricardo]

var PersonasAltas = personas.filter(esAlta)
var PersonalBajas = personas.filter(esBaja)

console.log(PersonasAltas)
console.log(PersonalBajas)

for (let i = 0; i < PersonalBajas.length; i++) {
    console.log(PersonalBajas[i].nombre)
}

/* const paserAlturaACms = persona => {
    // persona.altura = persona.altura * 100
    return{
        ...persona,
        altura: persona.altura * 100
    }
} */

const paserAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(paserAlturaACms)

console.log(personasCms)

var Pedro = {
    dinero: 10
}

var Camila = {
    dinero: 50
}

var personasDinero = [Pedro, Camila]

/* const reducer = (acum, persona) => {
    return acum + persona.dinero
}
 */

/* const reducer = (acum, persona) => acum + persona.dinero */

const reducer = (acum, {dinero}) => acum + dinero

var totalDeDinero = personasDinero.reduce(reducer, 0)

console.log(`el total de dinero es ${totalDeDinero}`)