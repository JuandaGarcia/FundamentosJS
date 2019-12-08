var contador = 0

const LLUEVE = () => Math.random() < 0.25

do {
    contador++
} while (!LLUEVE())

if (contador === 1) {
    console.log(`Fui a ver si llovía ${contador} ves`)
} else {
    console.log(`Fui a ver si llovía ${contador} veces`)
}
