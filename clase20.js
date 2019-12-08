const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

const OnPeopleResponse = function(persona){
    console.log(`Hola, soy ${persona.name}`)
}

function ObtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE.replace(':id',id)}`
    $.get(url, opts, OnPeopleResponse)
}

ObtenerPersonaje(1)
