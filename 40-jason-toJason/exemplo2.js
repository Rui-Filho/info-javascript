/* mais exemplos   */



// a number in JSON is just a number
console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]




/* valores específicos de javascript são ignorados  */

let user = {
  sayHi() { // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(user) ); // {} (empty object)




/* Objetos aninhados são mostrados perfeitamente */

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

console.log( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/







/* Referências circulares geram ERRO  */


let room = {
  number: 23
};

let meetup1 = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup1.place = room;       // meetup references room
room.occupiedBy = meetup1; // room references meetup

JSON.stringify(meetup1); // Error: Converting circular structure to JSON