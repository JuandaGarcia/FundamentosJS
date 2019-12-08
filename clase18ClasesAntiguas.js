//Falto la parte de la herencia en esta ejemplo ya que en la siguiente
// clase se muestras como hacerla de la manera correcta

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.SoyAlto = function(){
    if (this.altura >= 1.8) {
        console.log(`${this.nombre} es alto`)
    }else{
        console.log(`${this.nombre} es bajo`)
    }
}

/* Persona.prototype.SoyAlto = function(){
    return this.altura >= 1.8
    //retorna un booleano
} */

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var juan = new Persona('Juan', 'Garcia', 1.75)
var ricardo = new Persona('Ricardo', 'Garcia', 1.8)
juan.saludar()
juan.SoyAlto()

ricardo.saludar()
ricardo.SoyAlto()