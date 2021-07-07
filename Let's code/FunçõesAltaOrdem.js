//Funções de alta ordem 
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair); 

//Em JavaScript, funções são cidadãos de primeira classe. O que significa que podem ser tratados como valores e salvo em variável. 
//Portanto, naturalmente funções também podem ser passadas como parâmetro para uma função. Em resumo, uma função de alta ordem é uma função que recebe ou retorna uma função.