const prompt = require('prompt-sync')();

alturas_iniciais = []

// Implementar a entrada de dados
for (var i = 1; i <= 10; i++) {

  altura = parseFloat(prompt("Digite a altura: "))
  alturas_iniciais.push(altura)
}
// Copiando lista e Ordenando
alturas_ordenadas = alturas_iniciais.slice()
alturas_ordenadas.sort(function(a, b) { return a - b });

// Gerando saida de Dados.
for (var posicao = 0; posicao <= 9; posicao++) {
  console.log(`Aluno ${posicao}: maior que ${alturas_ordenadas.indexOf(alturas_iniciais[posicao])} aluno(s).`)
}

