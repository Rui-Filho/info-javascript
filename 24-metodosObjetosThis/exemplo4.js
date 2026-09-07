/* "THIS" em métodos de objetos 

Acessa o objeto antes do ponto.*/ 



let user = {
  name: "Ruy",
  age: 42,
  sayHi() {    
    console.log(this.name)
  }
}

user.sayHi()