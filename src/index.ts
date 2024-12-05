//index.ts
import { Controle, Digito, Operação } from "./calculadora";
import CpuB3 from "./cpuB3";
import TelaB3 from "./telaB3";
import TecladoB3 from "./tecladoB3";
import { TestadorCpu } from "./calculadoraTestes";

const tela = new TelaB3()
tela.limpe()

const cpu = new CpuB3(tela)

const teclado = new TecladoB3(cpu)

new TestadorCpu(cpu, true , true).executeTodosTestes()

/* DÍGITOS */

//teclado.digiteDigito(Digito.UM)
//teclado.digiteDigito(Digito.DOIS)
//teclado.digiteDigito(Digito.TRÊS)
//teclado.digiteDigito(Digito.QUATRO)
//teclado.digiteDigito(Digito.CINCO)
//teclado.digiteDigito(Digito.SEIS)
//teclado.digiteDigito(Digito.SETE)
//teclado.digiteDigito(Digito.OITO)
//teclado.digiteDigito(Digito.NOVE)

/* OPERAÇÕES */

//teclado.digiteOperacao(Operação.SOMA)
//teclado.digiteOperacao(Operação.SUBTRAÇÃO)
//teclado.digiteOperacao(Operação.MULTIPLICAÇÃO)
//teclado.digiteOperacao(Operação.DIVISÃO)
//teclado.digiteOperacao(Operação.PERCENTUAL)
//teclado.digiteOperacao(Operação.RAIZ_QUADRADA)

/* CONTROLES */

//teclado.digiteControle(Controle.DESATIVAÇÃO)
//teclado.digiteControle(Controle.ATIVAÇÃO_LIMPEZA_ERRO)
//teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
//teclado.digiteControle(Controle.MEMÓRIA_SOMA)
//teclado.digiteControle(Controle.MEMÓRIA_SUBTRAÇÃO)
//teclado.digiteControle(Controle.SEPARADOR_DECIMAL)
//teclado.digiteControle(Controle.IGUAL)