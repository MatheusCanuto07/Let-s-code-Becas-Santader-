//Métodos são computacionalmente idênticos às funções. Chamamos de métodos e não funções por dois motivos:
//Por estar no contexto POO e no interior de uma classe.
//Por ele poder manipular o estado interno de um objeto.

class Quadrado {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) {
            throw "Base e altura precisam ser números!";
        }
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calcula(){
        return this.base * this.altura;
    }
    duplicabase(){
        this.base = this.base * 2;
    }
    triplicabase(){
        this.base = this.base * 3;
    }
}

const Q1 = new Quadrado(11 , 12);

Q1.duplicabase();

console.log(Q1.calcula());

Q1.triplicabase()

console.log(Q1.calcula());