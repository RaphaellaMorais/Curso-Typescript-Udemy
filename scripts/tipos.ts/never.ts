//objetivo do void é não ter um retorno, no caso do never ele nunca vai ter um retorno;
//Ele basicamente interrompe a execução do código;

function showError(message: string):never {

    throw new Error(message);

}

//console.log(showError("Algo deu errado"));


console.log("==========================")

let n = 0;

function loopInfinito(): never {
    while(true) {
        console.log(n++);
        }
    }

//loopInfinito(); nunca vai ter retorno, vai estar apenas executando. 
// Ex. lampada que vai sempre verificar se escureceu para acender;