//O map é função que substitiu o for na prática
//Para percorremos todos os dados de um vetor não é nessário utilizar uma estrutura de repetição e sim o map

const vetor = ["10" , "20" , "30"];
const stringToInt = (x) => parseInt(x);

const vetor2 = vetor.map(stringToInt);
//dessa forma a função stringToInt vai ser aplicada em todos os itens do vetor
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x)
console.log(vetor3);

//Mais um exemplo da função MAP

const vetor = [1,2,3,4,5,6];

const dobro = (item)=>2*item;

const vetorDobrado = vetor.map(dobro);

//Ultimo exemplo utilizando a função MAP

const vetor = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor.map(toUpper);