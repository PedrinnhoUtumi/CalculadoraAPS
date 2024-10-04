import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";

export default class CpuB3 implements Cpu {
    tela!: Tela;
    listaPrimeiroNumero: Digito[] = [];
    listaSegundoNumero: Digito[] = [];   
    #operador!: Operação;  

    constructor(tela: Tela) {
        this.definaTela(tela)
    }
    
    recebaDigito(digito: Digito): void {
        // guarda o digito que chegou
        if(this.listaPrimeiroNumero.length === 0) {
            this.tela.limpe()
            this.#armazenaPrimeiroNumero(digito)
        } else {
            this.#armazenaSegundoNumero(digito)
        }
    }
    recebaOperacao(operação: Operação): void {
        this.#operador = operação
    }
    recebaControle(controle: Controle): void {
        this.#igual()
    }
    definaTela(tela: Tela): void {
        this.tela = tela
    }
    obtenhaTela(): Tela {
        return this.tela
    }
    reinicie(): void {
        this.tela.limpe()
        this.tela.mostre(Digito.ZERO)
    }
    #armazenaPrimeiroNumero(digito1: Digito): void {
        this.listaPrimeiroNumero.push(digito1)
        this.tela.mostre(this.listaPrimeiroNumero[0]);
    }
    #armazenaSegundoNumero(digito2: Digito): void {
        this.listaSegundoNumero.push(digito2)
        this.tela.mostre(this.listaSegundoNumero[0]);
    }
    #some(): void {
        let resultado = this.listaPrimeiroNumero[0] + this.listaSegundoNumero[0]
    }
    #igual(operacao = this.#operador): void {
        switch(operacao) {
            case 0:
                console.log(this.#some());
        }
    }
}



    // DESATIVAÇÃO,
    // ATIVAÇÃO_LIMPEZA_ERRO,
    // MEMÓRIA_LEITURA_LIMPEZA,
    // MEMÓRIA_SOMA,
    // MEMÓRIA_SUBTRAÇÃO,
    // SEPARADOR_DECIMAL,