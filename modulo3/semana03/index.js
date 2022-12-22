var somaQuadradosPares = 0
var somaQuadradosImpares = 0

for (let i = 1; i <= 20; i++) {
  console.log(`${Math.pow(i, 2)}`);
  if (i % 2 == 0) {
    somaQuadradosPares = somaQuadradosPares + Math.pow(i, 2)
  }
  else {
    somaQuadradosImpares = somaQuadradosImpares + Math.pow(i, 2)
  }
}

console.log(`A soma de quadrados pares: ${somaQuadradosPares}`);
console.log(`A soma de quadrados ímpares: ${somaQuadradosImpares}`);
