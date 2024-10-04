import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";

export default class CpuB3 implements Cpu {
    tela!: Tela;
    lista1: Digito[] = [];
    lista2: Digito[] = [];
    

    constructor(tela: Tela) {
        this.definaTela(tela)
    }
    
    recebaDigito(digito: Digito): void {
        // guarda o digito que chegou
        if(this.lista1.length === 0) {
            this.tela.limpe()
            this.#armazenaPrimeiroNumero(digito)
        } else {
            this.#armazenaSegundoNumero(digito)
        }
    }
    recebaOperacao(operação: Operação): void {
        throw new Error("Method not implemented.");
    }
    recebaControle(controle: Controle): void {
        throw new Error("Method not implemented.");
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
        this.lista1.push(digito1)
        this.tela.mostre(this.lista1[0]);
    }
    #armazenaSegundoNumero(digito2: Digito): void {
        this.lista2.push(digito2)
        this.tela.mostre(this.lista2[0]);
    }
}



    // DESATIVAÇÃO,
    // ATIVAÇÃO_LIMPEZA_ERRO,
    // MEMÓRIA_LEITURA_LIMPEZA,
    // MEMÓRIA_SOMA,
    // MEMÓRIA_SUBTRAÇÃO,
    // SEPARADOR_DECIMAL,