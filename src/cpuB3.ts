import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";

export default class CpuB3 implements Cpu{
    tela!: Tela;

    constructor(tela: Tela){
        this.definaTela(tela);
    }

    recebaDigito(digito: Digito): void {
        throw new Error("Method not implemented.");
    }
    recebaOperacao(operação: Operação): void {
        throw new Error("Method not implemented.");
    }
    recebaControle(controle: Controle): void {
        throw new Error("Method not implemented.");
    }
    reinicie(): void {
        this.tela.limpe();
        this.tela.mostre(Digito.ZERO);
    }
    definaTela(tela: Tela): void {
        this.tela = tela;
    }
    obtenhaTela(): Tela {
        return this.tela;
    }
}