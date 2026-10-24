/* JSON.parse usando a função  */

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() ) // now works!
console.log(meetup)


/* Funciona também para objetos aninhados */

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  

  return key == 'date'? new Date(value) : value
});

console.log( schedule.meetups[1].date.getDate() ); // works!
