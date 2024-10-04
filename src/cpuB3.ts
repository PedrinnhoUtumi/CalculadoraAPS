import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";
import {  } from "./tecladoB3"

export default class CpuB3 implements Cpu {
    tela!: Tela;

    constructor(tela: Tela) {
        this.definaTela(tela)
    }
    
    recebaDigito(digito: Digito): void {
        // guarda o digito que chegou
        // se for o primeiro digito, limpa a tela
        // envia o digito para a tela
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
}



    // DESATIVAÇÃO,
    // ATIVAÇÃO_LIMPEZA_ERRO,
    // MEMÓRIA_LEITURA_LIMPEZA,
    // MEMÓRIA_SOMA,
    // MEMÓRIA_SUBTRAÇÃO,
    // SEPARADOR_DECIMAL,