/* toJSON  */

let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

console.log( JSON.stringify(room) ); // 23

console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/


/* OUTRO EXEMPLO  */

let produto = {
    nome: "Mouse",
    preco: 100,

    toJSON() {
        return this.nome;
    }
};

console.log(JSON.stringify(produto));