class Pessoa {
    nome: string;
    idade: number;
    altura:number;

    constructor(nome:string, idade:number, altura:number){
        this.nome = nome; //para acessar as variáveis de cima;
        this.idade = idade;
        this.altura = altura;
    }

    toString(): string{
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;
    }
}
/* Quando a gente define atributos na nossa classe precisamos tbm de um método construtor,
 é como se fosse uma função mas não podemos chama-lo assim;*/

/*Quando a gente quer fazer referencia a um atributo ou método da nossa própria classe*/

const ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
const marcus = new Pessoa("Marcus Ribeiro", 19, 2);

ronaldo.nome = "Ronaldo"; //atribuindo novo nome;

console.log(ronaldo.toString());
console.log(marcus.toString());

//A paravra new é responsável por fazer uma nova instância (objeto é uma nova instância de uma classe);
