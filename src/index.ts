//index.ts
import { Controle, Digito, Operação } from "./calculadora";
import CpuB3 from "./cpuB3";
import TelaB3 from "./telaB3";
import TecladoB3 from "./tecladoB3";

const tela = new TelaB3()
tela.limpe()

const cpu = new CpuB3(tela)

const teclado = new TecladoB3(cpu)
teclado.digiteDigito(Digito.UM)
teclado.digiteDigito(Digito.TRÊS)
teclado.digiteOperacao(Operação.SOMA)
teclado.digiteDigito(Digito.DOIS)
teclado.digiteDigito(Digito.DOIS)
teclado.digiteOperacao(Operação.SOMA)
teclado.digiteDigito(Digito.DOIS)
teclado.digiteControle(Controle.IGUAL)

// teclado.digiteDigito(Digito.SETE)


