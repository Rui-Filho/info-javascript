/* Rest padrão */

let options = {
  title: "Menu",
  height: 200,
  width: 100,
}


let {title, ...rest} = options;


console.log(rest.height)
console.log(rest.width)
console.log(title)




/* Variáveis exisitentes - É preciso utilizar ()  */ 

let title1, width, height;

// okay now
({title1, width, height} = {title1: "Menu", width: 200, height: 100});

console.log( title1 ); // Menu