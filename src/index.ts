//index.ts
import { Controle, Digito, Operação } from "./calculadora";
import CpuB3 from "./cpuB3";
import TelaB3 from "./telaB3";
import TecladoB3 from "./tecladoB3";

console.clear()

const tela = new TelaB3()

const cpu = new CpuB3(tela)

const teclado = new TecladoB3(cpu)
let a = teclado.digiteDigito(Digito.TRÊS)
let b = teclado.digiteDigito(Digito.DOIS)
