/* loop aninhado gerando uma tabuada   */



for (let i = 1; i <= 9; i++) {
  console.log(`Tabuada do ${i}:`)

  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`)
  }

  console.log("-----");
}