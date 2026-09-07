/* SPLICE  */

//delete funciona, mas ainda mantem numero de elementos
let arr0 = ["I", "go", "home"];

delete arr0[1]; // remove "go"

console.log( arr0[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr0.length ); // 3



//SPLICE




//Remover elementos
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]


let numeros = [1,2,3,4,5,6]

numeros.splice(2,1)

console.log(numeros)




//Remover e acrescentar outros elementos
let arr2 = ["I", "study", "JavaScript", "right", "now"];


arr2.splice(0, 3, "Let's", "dance");

console.log( arr2 ) // now ["Let's", "dance", "right", "now"]



//Outros exemplos
let cores = ["Azul","Laranja", "Cinza"]

let coresRemovidas = cores.splice(0,2)

console.log(cores)

console.log(coresRemovidas)





//Inserir elementos, sem remover nenhum
let arr3 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr3.splice(2, 0, "complex", "language");

console.log( arr3 ); // "I", "study", "complex", "language", "JavaScript"






//Índice negativo

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

console.log( arr5 ); // 1,2,3,4,5

let coisas = ["agulha", "chinelo", "cu","caneta"]

coisas.splice(1,0,"gel lubrificate","sorinan")

console.log(coisas)

