function fibonacci(){
  let a = 0, b = 1
  return {
    next: function () {
      let f = a
      a = b
      b += a
      return { value: f, done: false}  // done -> false porque es una lista infinita
    }
  }
}



const fibo = {nombre: 'Sacha'}
fibo[Symbol.iterator] = fibonacci()

let i = 0
for(let value of fibo){
  console.log(value)
  i++
  if (i > 20) break
}
