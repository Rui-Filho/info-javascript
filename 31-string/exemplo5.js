

/* Métodos modernos para verificar texto   */


let carro = "gol"
console.log(carro.includes("gol"))

if(carro.includes("gol")){
    console.log("Existe!")
} // muito mais legível



if(carro.indexOf("gol")!= -1){
    console.log("Existe também.")
}  // modo mais antigo de verificar, usando indexof


console.log(carro.includes("l",2))//true
console.log(carro.includes("o",1))//true
console.log(carro.includes("g",1))//false


/*   startsWith*/ 

let cidade = "Salvador"
console.log(cidade.startsWith("Sal")) //true

/*  endsWith     */
let arquivo = "lottus.png"
console.log(arquivo.endsWith(".png"))
