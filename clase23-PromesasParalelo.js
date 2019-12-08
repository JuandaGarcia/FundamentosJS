const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

function ObtenerPersonaje(id){

    return new Promise(function(resolve, reject){
        const url = `${API_URL}${PEOPLE.replace(':id',id)}`
        $.get(url, opts, function(data){
            resolve(data)
        }).fail(function(){
            reject(id)
        })
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje con id ${id}`)
}

var ids = [1, 2, 3, 4, 5]
/* var promesas = ids.map(function(id){
    return ObtenerPersonaje(id)
}) */

var promesas = ids.map(id => ObtenerPersonaje(id))

Promise.all(promesas).then(personajes => console.log(personajes)).catch(onError)

/* ObtenerPersonaje(1).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
    return ObtenerPersonaje(2)
}).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
    return ObtenerPersonaje(3)
}).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
    return ObtenerPersonaje(4)
}).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
    return ObtenerPersonaje(5)
}).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
    return ObtenerPersonaje(6)
}).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
})
.catch(onError) */



