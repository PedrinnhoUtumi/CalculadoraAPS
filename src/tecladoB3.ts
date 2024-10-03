import { Controle, Cpu, Digito, Operação, Teclado } from "./calculadora";
import CpuB3 from "./cpuB3";

export default class TecladoB3 implements Teclado {
    cpu!: Cpu;
    
    constructor(cpu: Cpu){
        this.definaCpu(cpu);
    }

    digiteDigito(digito: Digito): void{
        this.cpu.recebaDigito(digito)
        
    }
    digiteOperacao(operação: Operação): void{
        
    }
    digiteControle(controle: Controle): void{
        
    }
    definaCpu(cpu: Cpu): void {
        this.cpu = cpu
    }
    obtenhaCpu(): Cpu {
        return this.cpu
    }

}