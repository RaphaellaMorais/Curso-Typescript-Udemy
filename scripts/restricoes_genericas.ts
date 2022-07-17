interface IHcode {
    length: number;
}

function mostrarQuantidadeTotal<Hcode extends IHcode>(valor: Hcode /*vai receber um valor*/): Hcode /*vai retonar um valor*/ {
    
    console.log(`Total: ${valor.length}`);

    return valor;

}

console.log(mostrarQuantidadeTotal([10,20]));
console.log(mostrarQuantidadeTotal({nome: "Ronaldo", length: 1}));