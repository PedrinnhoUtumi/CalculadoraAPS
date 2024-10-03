//index.ts
import { Controle, Digito, Operação } from "./calculadora";
import CpuB3 from "./cpuB3";
import TelaB3 from "./telaB3";
import TecladoB3 from "./tecladoB3";

const tela = new TelaB3()
tela.mostre(Digito.ZERO)
tela.mostre(Digito.DOIS)

const cpu = new CpuB3(tela)

cpu.reinicie()