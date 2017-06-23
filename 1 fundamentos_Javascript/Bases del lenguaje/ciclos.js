const nombre = "Sacha"
const dias = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo"
]

function correr(){
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min // Entre 5 y 15 Random entre 0 y 1
}

let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++){
  const kms = correr()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms} kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kms`)
