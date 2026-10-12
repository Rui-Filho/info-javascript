/* Autocorreção  */

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); 


let date1 = new Date(2016, 1, 28);
date1.setDate(date.getDate() + 2);

console.log( date1 ); // 1 Mar 2016 




/* Data para numero  */

let date2 = new Date();
console.log(+date2)





/* Diferença de data  */

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log( `The loop took ${end - start} ms` );

