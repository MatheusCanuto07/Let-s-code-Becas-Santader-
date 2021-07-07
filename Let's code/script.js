var senha = 123;

//IF
if (senha == 123) {
    console.log("Acesso liberado")
}

let hoje = new Date().getDay();
let dia;


//Switch
switch (hoje) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Segunda";
        break;
    case 2:
        dia = "Terça";
        break;
    case 3:
        dia = "Quarta";
        break;
    case 4:
        dia = "Quinta";
        break;
    case 5:
        dia = "Sexta";
        break;
    case 6:
        dia = "Sábado";
}

//While

var i = 1;
while (i <= 99) {
    console.log(i)
    i = i + 1;
}

i = 1;

do {
    console.log(i)
    i++
} while (i <= 100)


//for
for (let i = 1; i <= 10; i++) {
    console.log(9 * i)
}

//Vetor

var vetor = [0,1,2,3,4,5,6];

for(let i = 0 ; i <= 5; i++){
    console.log(vetor[i])
}

for(let i = 0 ; i < vetor.length ; i++){
    console.log(vetor[i])
}

const vetor2 = [10,20,30,40,50];
for(let valor of vetor){
    console.log(valor);
}
//Nesse caso a variável valor recebe o que está dentro do vetor percorrendo assim o vetor inteiro

const array = ["Matheus" , "Eduardo" , "Pedro"]
for(let indice in array){
    console.log(indice , array[indice])
}

//Manipulando dados no vetor
//Adicionar um elemento no final do vetor
let vetor = ["A","B","C"]
let novo_elemento = 60;

vetorpush(novo_elemento);
//Remover do final
vetor.pop();
//Adicionar no começo
vetor.unshift();
//Remover do começo
vetor.shift();

//Funçoes

// Definindo a função
function geradorNumerico(comeco, fim){
    for(let i = comeco; i <= fim; i++){
        console.log(i);
    }
}

// Chamando a função
//Essa função mostra dois valor entre números
geradorNumerico(10,20);

//Atribuindo função a variáveis
function soma(a,b){
    return a+b;
}

const resultado = soma(2,3);
//Arrow function