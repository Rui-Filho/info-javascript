/* exemplo 2 loop aninhado*/


for (let linha = 1; linha <= 10; linha++) {
  let texto = ""

  for (let coluna = 1; coluna <= 5; coluna++) {
    texto += "* "
  }

  console.log(texto);
}