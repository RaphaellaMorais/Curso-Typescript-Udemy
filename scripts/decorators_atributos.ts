function decoratorAttr(
    target: unknown,
    nomePropriedade: string
) {
    
    const novoNome = `_${nomePropriedade}`; //isso aqui é para a gente fazer a referencia correta para o nosso atributo;

    Object.defineProperty(target, nomePropriedade, {
        get() {
        
            return this[novoNome].toUpperCase();

        },
        set(novoValor) {
            this[novoNome] = novoValor.split('').reverse().join('');
        }
    })

}

class Animal {

    @decoratorAttr
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const cachorro = new Animal ("Pluto");

cachorro.nome = "Snoopy";

console.log(cachorro.nome);

//Tenho q ver melhor esse assunto, ainda não entendi muito bem; 