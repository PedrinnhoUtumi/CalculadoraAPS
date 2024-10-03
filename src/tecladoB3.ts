import { Controle, Cpu, Digito, Operação, Teclado } from "./calculadora";

export default class TecladoB3 implements Teclado {
    cpu!: Cpu;
    
    constructor(cpu: Cpu){
        this.definaCpu(cpu);
    }

    digiteDigito(digito: Digito): void{
        throw new Error("Method not implemented.");
    }
    digiteOperacao(operação: Operação): void{
        throw new Error("Method not implemented.");
    }
    digiteControle(controle: Controle): void{
        throw new Error("Method not implemented.");
    }
    definaCpu(cpu: Cpu): void {
        this.cpu = cpu
    }
    obtenhaCpu(): Cpu {
        return this.cpu
    }

}