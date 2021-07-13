//Classe e contrutor
//São objetos onde conseguimos 
class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new pessoa ('Carlos' , 20)

pessoa.idade = 21;

console.log(pessoa1);

const pessoa2 = new pessoa ('Laura' , 15)

console.log(pessoa2)