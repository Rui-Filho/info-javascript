/* Propriedade Oculta   */


let id = Symbol("id");

let user = {
    name: "John"
}

user[id] = 123

for (let key in user) {
    console.dir(key,{depth:null});
}