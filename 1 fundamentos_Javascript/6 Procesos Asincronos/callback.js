
function get(URL, callback){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    const DONE = 4
    const OK = 200
    if(this.readyState === DONE){
      callback(null, JSON.parse(this.resonseText))
    } else{
      callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
    }
  }

  xhr.open('GET', URL);
  xhr.send(null);
}

get('http://swapi.co/api/people/1/', function onResponse(err, luke){
  if(err) console.log(`Request failed: ${err}`)

  get(luke.homeworld, function onHomeworldResponse(err, homeworld){

  })
  console.log(`Request succeded`)
  console.log('luke',luke)
})
