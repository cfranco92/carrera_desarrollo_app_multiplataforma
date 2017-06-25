
function saludarFamilia(apellido){
  return function saludarMiembrosDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")


function makePrefixer(prefijo){
  return function pegada(palabra){
    console.log(prefijo+palabra)
  }
}

const prefijoRe = makePrefixer("re")
const prefijoAlgo = makePrefixer("Algo")

prefijoRe("bueno")
prefijoAlgo(" bacano")
