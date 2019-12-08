var juan = {
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: '19',
    peso: 75
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}kg`)

/* function AumentarPeso (persona){
    return persona.peso += 200
} */

const INCREMENTO_PESO = 0.3
const DIAS_AÑO = 365

const AumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
const DisminuirPeso = (persona) => persona.peso -= INCREMENTO_PESO
const ComeMucho = () => Math.random() < 0.3
const RealizaDeporte = () => Math.random() < 0.4

const META = juan.peso - 3
var Dias = 0

while (juan.peso > META) {

    if (ComeMucho()) {
        AumentarPeso(juan)
    }
    if (RealizaDeporte()) {
        DisminuirPeso(juan)
    }

    Dias += 1
}

console.log(`Pasaron ${Dias} días hasta que ${juan.nombre} llego a su meta`)

/* for (var i = 1; i < DIAS_AÑO; i++) {
    
    var ramdom = Math.random();

    if (ramdom < 0.25) {
        
        AumentarPeso(juan)

    }else if (ramdom < 0.5) {
        
        DisminuirPeso(juan)

    }

} */

/* console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)}kg`) */