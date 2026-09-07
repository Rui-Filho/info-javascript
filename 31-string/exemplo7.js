/* Comparando Strings 
codePointAt()  */

console.log("a" > "Z") // minúscula sempre é maior do que a maíuscula

console.log("A".codePointAt(0))

console.log("B".codePointAt(0))

console.log("Z".codePointAt(0))

console.log("a".codePointAt(0))

console.log("Ö".codePointAt(0)) //214

let palavra = "casa"
console.log(palavra.codePointAt(2)) // s = 115

/* fromCodePoint()  */ 

console.log(String.fromCodePoint(65))// A

/* laço */

for(let i=65;i<=220;i++){
    console.log(String.fromCodePoint(i))
}

console.log( 'Österreich'.localeCompare('Zealand') )