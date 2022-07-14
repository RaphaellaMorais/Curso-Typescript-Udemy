export default function mostrarMensagem(texto: string | number | object): boolean {

    console.log(texto);

    return true;

}

// se vc usar o default não precisa usar o {} na hora de importar em algum outro arquivo;
//utilizamos o default tbm porq estamos exportando apenas um contexto;