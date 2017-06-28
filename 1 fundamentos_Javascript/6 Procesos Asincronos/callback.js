
// const promise = new Promise(function(resolve, reject){
//   setTimeout(function() {
//     reject(new Error('Se produjo un error'))
//   },1000)
// })
//
// promise
//   .then(function (){
//
//   })
//   .catch(function (err){
//
//   })




function get(URL){
  return new Promise((revolse, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if(this.readyState === DONE){
        resolve(JSON.parse(this.resonseText))
      } else{
        reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })
}

function handleError(err){
  console.log(`Request failed: ${err}`)
}


let luke
get('http://swapi.co/api/people/1/')
  .then((response) => {
    luke = response
    return get(luke.homeworld)
  })
  .then((homeworld) => {
    luke.homeworld = homeworld
  })
  .catch(err => handleError(err))
