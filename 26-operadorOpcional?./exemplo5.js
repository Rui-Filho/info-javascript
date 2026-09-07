/* Testanto encadeamento opcional para chamar métodos    */



const usuario = {
    nome: "Rui",

    idade: 41,

    dizerOi(){
        console.log(`Olá , meu nome é ${this.nome}`)
    },

    dizerIdade(){
        console.log(`eu tenho ${this.idade} anos de idade`)
    },
}


usuario?.dizerOi?.() // Chamando o método e testando se tanto o objeto, ou o método existe

usuario?.dizerIdade()  // testanto se o objeto existe e chamando o método

console.log(usuario?.nome) 

