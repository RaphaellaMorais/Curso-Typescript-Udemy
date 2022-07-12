"use strict";
class Documento {
    valor = "1236544789-01";
    #numero = 35;
    mostrarDocumento() {
        return this.#numero;
    }
}
class CNPJ extends Documento {
    #numero = 50;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
console.log(rg.mostrarDocumento());
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
//# sourceMappingURL=classe_private_ecma_ts.js.map