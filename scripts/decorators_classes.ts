/*Aqui quando falarmos de classe:
estamos trabalhando com construir ou instanciar um novo objeto a partir de uma classe;
Estamos falando do método construtor, no momento em que a gente faz o new e define a instância da classe;*/
import { debug, log } from "./utils";

@debug
class PrimeiraClasse {

    constructor() {}
}


@log
class SegundaClasse {

    constructor() {

    }
}



console.log(new SegundaClasse());