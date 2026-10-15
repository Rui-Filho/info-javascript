/* Benchmarking  */


function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );


/* Data.parse de uma string   */


let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)


let date3 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(date3);