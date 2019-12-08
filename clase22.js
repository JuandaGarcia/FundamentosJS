const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

function ObtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE.replace(':id',id)}`
    $.get(url, opts, callback).fail(function(){
        console.log(`Sucedio un error, no se pudo obtener el personaje ${id}`)
    })
}


ObtenerPersonaje(1, function(personaje){
    console.log(`Hola, soy ${personaje.name}`)

    ObtenerPersonaje(2, function(personaje){
        console.log(`Hola, soy ${personaje.name}`)

        ObtenerPersonaje(3, function(personaje){
            console.log(`Hola, soy ${personaje.name}`)

            ObtenerPersonaje(4, function(personaje){
                console.log(`Hola, soy ${personaje.name}`)

                ObtenerPersonaje(5, function(personaje){
                    console.log(`Hola, soy ${personaje.name}`)
                })
            })
        })
    })
})
