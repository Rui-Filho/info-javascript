/* Laços */


//"FOR" forma mais antiga de percorrer arrays
let array = ["A","B","C"]
for(let i = 0; i < array.length ; i++){
    console.log(array[i])
}





// "for...of" arrays específico para arrays
let carros = ["Fusca", "Saveiro", "Uno"]
for(let carro of carros){
    console.log(carro)
}




// Tecnicamente pode utilizar for...in, pois array tb é um objeto, mas não é aconselhado, for in é mais indicados para objetos genéricos, pois é indicado para mostrar as propriedades.
let cores = ["Azul", "Rosa", "Amarelo"]

for(let cor in cores){
    console.log(cores[cor])
}


//Sobre lenght
let array1 = [1,2,3,4,5]
array1.length = 10
console.log(`Testando se aumenta o array${array1}`)

array1.length = 2
console.log(`Testando se diminui o array .${array1}`)