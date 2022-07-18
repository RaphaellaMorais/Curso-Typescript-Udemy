function decoratorMetodo(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {

    descriptor.value = (...args: unknown[]) => {

        return args.map(item => {
            return (<string>item).toUpperCase();
        })

    };
}

class TratarMensagem {

    @decoratorMetodo //fica aqui porq esse decorator é do método e não da classe;
    dizerMensagem(...mensagens: string[]) {

        return mensagens;

    }
}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem("Olá", "Seja bem-vindo", "Hcode"));