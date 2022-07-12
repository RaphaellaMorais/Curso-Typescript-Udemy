/*Diferença do privete do TS para o prive do JS;
Em Js colocamos o "#" e não o nome privete;
No JS mesmo que ele mostre vários erros ele deixa passar;*/

class Documento {
    private valor: string = "1236544789-01"; // TS
    #numero: number = 35; // ECMAScript

    mostrarDocumento (){
        return this.#numero;
    }
}

class CNPJ extends Documento {

    //private valor: string = "25698745632-01"
    #numero: number = 50;

    mostrarCNPJ (){
        return this.#numero;
    }
}

/*No o privete do TS não deixou chamar o atributo na classe de baixo já o de JS sim; */

const rg = new Documento();

console.log(rg.mostrarDocumento());

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());

//console.log("RG:" + rg.valor); // mesmo dando erro ele executa;