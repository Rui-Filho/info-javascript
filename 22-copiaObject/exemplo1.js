/* copia e referencia*/

/* Ambas variáveis se referem ao mesmo objeto, diferente dos tipos primitivos, em que cada variável é independente. */

let user = { name: 'John' }

let admin = user

admin.name = 'Pete'

console.log(user.name)