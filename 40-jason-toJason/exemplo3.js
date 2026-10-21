/* Exemplo 3  */

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, ['title', 'participants',]) );
// {"title":"Conference","participants":[{},{}]}



/*Agora colocamos todos os nomes de propriedades que queremos, incluindo os nomes de propriedades aninhadas, só deixamos de fora a propriedade de faz referência circular*/


let room1 = {
  number: 23
};

let meetup1 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room1 // meetup references room
};

room1.occupiedBy = meetup1; // room references meetup

console.log( JSON.stringify(meetup1, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/