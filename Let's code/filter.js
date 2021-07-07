const vetor = [0,1,2,3,4,5,6,7,8,9,10];

//Recebemos o valor x e retornar
const pares = vetor.filter(x => x % 2 === 0)
const impar = vetor.filter(function(x){return x %2 === 1})

console.log(pares);
console.log(impar);