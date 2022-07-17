/*Nos permite criar estruturas que são adaptáveis a vários tipos de dados;
Esse conceito nos ajuda a reaproveitar melhor nosso código e torná-lo flexível para diversas situações;
- Para definir um Generic, basta informar um tipo genérico usando os sinais de menor e maior <>;
- Mesmo que definamos um tipo genérico, continuamos a ter acesso aos recursos do IntelliSense do VS Code;

Podemos criar tipos genéricos ao trabalhar com:
- Funções
- Interfaces
- Classes */

/*function obterPrimeiraPosicao(meuArray: Array<any>): any {
    return meuArray[0];
}

console.log(obterPrimeiraPosicao(["Glaucio", "João", "Rafael", "Ronaldo"])); */

function obterPrimeiraPosicao<T>(meuArray: Array<T>): T {
    return meuArray[1];
}

console.log(obterPrimeiraPosicao(["Glaucio", 10, "João", "Rafael", "Ronaldo"]));