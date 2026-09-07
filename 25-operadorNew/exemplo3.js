/* Métodos no construtor */


function User(name) {
  this.name = name

  this.sayHi = function() {
    console.log(`Meu nome é ${this.name}`)
  }
}

let rui = new User("Rui")

rui.sayHi()


