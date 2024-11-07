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
teclado.digiteDigito(Digito.ZERO)
teclado.digiteDigito(Digito.ZERO)
//teclado.digiteDigito(Digito.QUATRO)
//teclado.digiteOperacao(Operação.RAIZ_QUADRADA)
teclado.digiteOperacao(Operação.SOMA)
//teclado.digiteDigito(Digito.DOIS)
//teclado.digiteOperacao(Operação.MULTIPLICAÇÃO)
//teclado.digiteDigito(Digito.TRÊS)
//teclado.digiteControle(Controle.MEMÓRIA_SOMA)
//teclado.digiteOperacao(Operação.DIVISÃO)
teclado.digiteDigito(Digito.UM)
teclado.digiteDigito(Digito.ZERO)
//teclado.digiteControle(Controle.MEMÓRIA_SOMA)
//teclado.digiteDigito(Digito.ZERO)
teclado.digiteOperacao(Operação.PERCENTUAL)
//teclado.digiteDigito(Digito.UM)
// teclado.digiteControle(Controle.SEPARADOR_DECIMAL)
//teclado.digiteDigito(Digito.UM)
// teclado.digiteDigito(Digito.UM)
//teclado.digiteControle(Controle.MEMÓRIA_SOMA)
//teclado.digiteOperacao(Operação.SOMA)
//teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
//teclado.digiteDigito(Digito.UM)
// teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)

// teclado.digiteOperacao(Operação.RAIZ_QUADRADA)
//teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
// teclado.digiteDigito(Digito.SETE)



teclado.digiteControle(Controle.IGUAL)