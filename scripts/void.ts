// void significa basicamente vazio; Um tipo vazio;
const meuConsole:void = console.log("Hello TypeScript with Hcode");
// void é um tipo de dado criado para vc especificar o retorno de funções, o retorno de métodos.
//Lembrando que quando vc acessa com . vc está acessando a função de um objeto;
console.log(meuConsole); 
//não foi aplicado nenhuma valor nela, o valor é vazio = void, por isso retorna undefined;

function mostrarFrase():void {
    console.log("Aprendendo typeScript!");

    return;
}

//return não retorna nada;
//Normalmente utilizado em funções que não retornam nada, mas executam uma ação;
// Funções que acabam virando sub-rotinas