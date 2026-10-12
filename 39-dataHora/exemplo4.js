/* Componentes de data para acesso  */

let date = new Date();

// the hour in your current time zone
console.log( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
console.log( date.getUTCHours() )

console.log(date)


/* Diferença do fuso horário entre UTC e local   */

console.log(date.getTimezoneOffset())