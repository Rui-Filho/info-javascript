/* Iteráveis    */


// Um array é iterável
let numeros = [10, 20, 30]

for (let numero of numeros) {
    console.log(numero)
}



// Uma string tb é iterável

let palavra = "Rui"

for (let letra of palavra) {
    console.log(letra)
}



//Um objeto não é iterável

let range = {
  from: 1,
  to: 5
};


range[Symbol.iterator] = function() {

  
  return {
    current: this.from,
    last: this.to,

    
    next() {
      
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};


for (let num of range) {
  alert(num)
}