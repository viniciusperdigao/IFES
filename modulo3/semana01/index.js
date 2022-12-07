const prompt = require("prompt-sync")();

// Leia os três números
numero1 = parseInt(prompt("Digite o número 1: "))
numero2 = parseInt(prompt("Digite o número 2: "))
numero3 = parseInt(prompt("Digite o número 3: "))

// Calcule a soma e a média
soma = numero1 + numero2 + numero3
media = soma /3
// Mostre na tela o valor da soma e média

console.log("A soma é: ",soma)
console.log("A média é: ",media)

