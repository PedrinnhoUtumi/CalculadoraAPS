import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";

export default class CpuB3 implements Cpu {
    tela!: Tela;

    constructor(tela: Tela) {
        this.definaTela(tela)
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
    recebaDigito(digito: Digito): void {
        
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