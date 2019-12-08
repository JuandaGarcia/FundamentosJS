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

async function ObtenerP(){
    var ids = [1, 2, 3, 4, 5]
    var promesas = ids.map(id => ObtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        onError(id)
    }
}

ObtenerP()




