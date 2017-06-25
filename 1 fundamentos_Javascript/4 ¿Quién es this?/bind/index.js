class Toggable{
  constructor(el) {
    // inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.el.add.EventListener('click', this.onClick.bind(this))
  }

  onClick(ev) {
    // cambiar estado interno
    this.activated = !this.activated
    // LLAMAR A toggleText
    this.toggleText()  // Hace que cambie el texto
  }

  toggleText(){
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
