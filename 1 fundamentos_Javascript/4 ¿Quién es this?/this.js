class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos(){
    const _this = this
    this.amigos.forEach(function (amigo) {
      console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
    })
    // this.amigos.forEach((amigo) => {
    //   console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    // }.bind(this))
  }
}

const sacha = new Persona ("Sacha", ["Juan", "Pepe", "Lorena", "Cristian"])
sacha.listarAmigos()
