//Para acessar e modificar essa variavel criamos um metodo 

class Quadrado{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
      this.setCor = (c) => {cor = c};
    }
  }

const quadrado = new Quadrado(3,4);
quadrado.setCor('red');
console.log(quadrado.getCor());

class Quadrado2{
  
    constructor(lado, altura){
      this._cor = 'blue';
      this.lado = lado;
      this.altura = altura;
    }
  
    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
  }
  
  const quadrado2 = new Quadrado2(3,4);
  quadrado2.cor = 'yellow';
  console.log(quadrado2.cor);
  