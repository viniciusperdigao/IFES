const { log } = require('console');

const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
var salarioAposentadoria = 0;
if (idade >= 65 || tempo >= 30 || idade >= 60 && tempo >= 25) {
  if (tempo > 20) {
    console.log(`Você pode se aposentar`)
    salarioAposentadoria = salario * 0.8
    if (salarioAposentadoria < 1212) {
      salarioAposentadoria = 1212
    }
    else if (salarioAposentadoria > 7087.22) {
      salarioAposentadoria = 7087.22
    }
    console.log(`Seu salário de aposentado será: ${salarioAposentadoria}`)
  }



} else if (tempo <= 20) {
  salarioAposentadoria = salario * 0.6
  if (salarioAposentadoria < 1212) {
    salarioAposentadoria = 1212
  } else if (salarioAposentadoria > 7087.22) {
    salarioAposentadoria = 7087.22
  }
  console.log(`Seu salário de aposentado será: ${salarioAposentadoria}`)
}



else {
  console.log('Você não pode se aposentar')
}




// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)