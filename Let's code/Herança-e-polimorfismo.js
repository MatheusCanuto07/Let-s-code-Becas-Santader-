//Herança no contexto de POO é quando uma classe herda atributos de outra.

class Pessoa{
    constructor(nome , idade){
        this.nome = nome;
        this.idade = idade; 
    }
}

//Utilizamos extends para mostrar que a classe vai herdar todos os atriubutos e metódos da classe pai

class cidadao extends Pessoa{
    constructor (nome, idade, rg, cpf){
        //Super se refere a classe superior a que estamos
        super(nome,idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadaoV = new cidadao('Lucas', 26, '000' , '162');
console.log(cidadaoV instanceof cidadao); //instanceof Retorna verdadeiro se a variavel for de um tipo ou false se ela não for desse tipo
//Polimorfismo : Uma classe pai possuindo diversas formas que são as classes filhas.