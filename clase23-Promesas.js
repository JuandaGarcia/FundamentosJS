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

ObtenerPersonaje(1).then(function(personaje){
    console.log(`Hola, soy ${personaje.name}`)
}).catch(onError)



