/* Improviso para treinar métodos em objetos      */


const calculo = {

    numero1:2,

    numero2:3,
    
    somar(){
        return this.numero1 + this.numero2
    },

    multiplicar(){
        return this.numero1*this.numero2
    }
}


console.log(calculo.somar())

console.log(calculo.multiplicar())