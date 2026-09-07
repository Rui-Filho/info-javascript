/* Valor padrão em códigs antigos:

*/

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  console.log( from + ": " + text );
}

showMessage("rui")



function showMessage1(from, text) {
  
  text = text || 'no text given'
  
}
showMessage1("Ana")