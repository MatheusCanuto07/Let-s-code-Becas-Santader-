//Encapsulamento é o conceito de negar o acesso aos atributos de uma classe diretamente, seja para leitura ou escrita.

function quadrado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const qua = new quadrado(3, 4);

//Não é possivel acessar o atributo da função cor uma vez que o mesmo foi criado utilizando let mas 
//POdemos criar um um atributo novo como mesmo nome

qua.cor = 'Amarelo';

console.log(qua.cor)

//Parte dois
//Acessando um valor Let dentro de uma função

function criaQuadrado(base,altura){
    let cor = 'blue';

    return{
        base,
        altura,
        Getcor: function(){return cor;}
    };
}

const qua2 = criaQuadrado(3,4);
console.log(qua2.Getcor())

//Parte 3

class Quadrado{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
    }
  }
  
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Quadrado { lado: 3, altura: 4, getCor: [Function], setCor: [Function] }
  console.log(quadrado.getCor());
  //blue
  quadrado.cor = 'red'; //errado! cria um atributo cor a mais no objeto!
  console.log(quadrado.cor);
  //red
  console.log(quadrado.getCor());
  //blue