function* fibonacci(){
  let a = 0, b = 1

  while (true){
    let f = a
    a = b
    b += a
    let reset = yield f
    if (reset) a = 0, b = 1
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
