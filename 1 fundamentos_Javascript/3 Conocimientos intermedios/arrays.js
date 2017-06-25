

/**
*** REDUCE:
***     Reduce sirve para realizar un ciclo visitando todos los elementos del arreglo
**/
function suma(...numeros){
  return numeros.reduce(function (acum, numero){
    acum += numero
    return acum
  }, 0)
}

/**
*** MAP:
***     Map sirve para visitar todos los elementos del arreglo y cambiarlos por otro valor
**/
const dobles = (...numeros) => numeros.map(numero => numero * 2)

/**
*** FILTER:
***     Filter sirve para buscar en todos los elementos del arreglo y devolver un arreglo con una condición
**/
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
