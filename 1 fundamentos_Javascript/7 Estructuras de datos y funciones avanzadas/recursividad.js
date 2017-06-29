function fibonacci(num){
  if (num == 1) return 0
  if (num == 2) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

const numero = fibonacci(5)
console.log(numero)

fibonacci(5) // 3
