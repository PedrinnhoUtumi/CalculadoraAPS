import { Controle, Cpu, Digito, Operação } from "./calculadora";

export default class CpuB3 implements Cpu {
    receba(digito: Digito): void;
    receba(operação: Operação): void;
    receba(controle: Controle): void;
    receba(controle: unknown): void {
        throw new Error("Method not implemented.");
    }
    reinicie(): void {
        this.desative()
        this.ative()
    }

    ative(): Controle {
        //limpar
        return 1;
    }
    
    desative(): Controle {
        return 0;
    }
}



    // DESATIVAÇÃO,
    // ATIVAÇÃO_LIMPEZA_ERRO,
    // MEMÓRIA_LEITURA_LIMPEZA,
    // MEMÓRIA_SOMA,
    // MEMÓRIA_SUBTRAÇÃO,
    // SEPARADOR_DECIMAL,