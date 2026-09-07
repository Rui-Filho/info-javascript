/* Operator "new" 

Função construtora

*/

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack")

let user2 = new User("Rui")

/* Portanto, let user = new User("Jack")produz o mesmo resultado que:

let user = {
  name: "Jack",
  isAdmin: false
};  */

console.log(user.name)

console.log(user.isAdmin)

console.log(user2.name)


