const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

function ObtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE.replace(':id',id)}`
    $.get(url, opts, function(persona){
        console.log(`Hola, soy ${persona.name}`)
    })

    if (callback) {
        callback()
    }
}

ObtenerPersonaje(1, function(){
    ObtenerPersonaje(2, function(){
        ObtenerPersonaje(3, function(){
            ObtenerPersonaje(4, function(){
                ObtenerPersonaje(5)
            })
        })
    })
})
