// día de nacimiento
const nacimiento = new Date(1992, 7, 26)

// fecha de hoy
const hoy = new Date()

// tiempo que ha pasado desde el nacimiento
const tiempo = hoy - nacimiento

// tiempo en segundos
const tiempoSegundos = tiempo / 1000

// tiempo en minutos
const tiempoMin = tiempoSegundos / 60

//tiempo en horas
const tiempoHoras = tiempoMin / 60

// día que cae próximo cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())


const diasSemana = [
  "Domingos",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

diasSemana[proximo.getDay()]
