function showMessage(from, text = "no text given") {
  console.log( `${from} : ${text}` );
}

showMessage("Ann")
showMessage("Ann", "Rui") // Ann: no text given.

/*Se a função tiver dois parâmetros, mas na chamada dela houver só um argumento. Dá para definir valor padrão no parâmetro da função.  */