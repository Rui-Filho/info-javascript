/* Improviso da tarefa 6   */



function Calculadora(){

    this.metodos = {

        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
    }


    this.adicionarMetodo = function(name,func){
        this.metodos[name]=func
    }


    this.calcular = function(string){

        let array = string.split(" ")

        return this.metodos[array[1]](Number(array[0]),Number(array[2]))

    }


}

let novoCalculo = new Calculadora()

console.log(novoCalculo.calcular("8 + 9"))

console.log(novoCalculo.calcular("106 - 75"))




novoCalculo.adicionarMetodo("*", (a,b) => a * b)

console.log(novoCalculo.calcular("7 * 5"))



novoCalculo.adicionarMetodo("/", (a,b) => a / b)

novoCalculo.adicionarMetodo("**", (a,b)=> a ** b)



console.log(novoCalculo.calcular("100 / 4"))

console.log(novoCalculo.calcular("5 ** 3"))


