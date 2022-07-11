//pode ser aplicando tanto nos atributos como nos métodos;
//public já é o encapsulamento padrão, se não informar será public;

class Veiculo {
    public cor: string;


    constructor(cor:string){
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean{
        return false;
    }
}

const carro = new Veiculo("Branco");

carro.cor = "Preto"; // tive acesso e alterei um atributo, estando fora da classe; 

console.log(carro.cor);
console.log(carro.tentarAbrirPorta());