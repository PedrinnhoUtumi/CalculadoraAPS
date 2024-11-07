import { Controle, Cpu, Digito, Operação, Tela, Sinal } from "./calculadora";
import { NumeroB3 } from "./numeroB3";

export default class CpuB3 implements Cpu {
  tela!: Tela;
  #operando1: NumeroB3 = new NumeroB3();
  #operando2: NumeroB3 = new NumeroB3();
  #operador: Operação | undefined = undefined;
  #memoria: NumeroB3 = new NumeroB3();
  #historicoControle: Controle | undefined = undefined;
  #bandeiraM: boolean = false;
  #operadorUsado = 0

  constructor(tela: Tela) {
    this.definaTela(tela);
  }

  recebaDigito(digito: Digito): void {
    if (this.#operador === undefined) {
      if (this.#bandeiraM) {
        this.tela.limpe();
        this.#bandeiraM = false;
        this.#operando1 = new NumeroB3();
      }
      this.#operando1.digitos.push(digito);
      this.tela.mostre(digito);
    } else {
      if (!this.#operando2.temDigito()) {
        this.tela.limpe();
      }
      this.#operando2.digitos.push(digito);
      this.tela.mostre(digito);
    }
  }

  recebaOperacao(operação: Operação): void {
    if (operação === Operação.RAIZ_QUADRADA) {
      this.#radicie();
      return;
    }
    if (operação === Operação.PERCENTUAL) {
      this.#percentue();
      return;
    }
    if (this.#operador !== undefined && this.#operando2.temDigito()) {
      this.recebaControle(Controle.IGUAL);
    }
    this.#operador = operação;
  }

  recebaControle(controle: Controle): void {
    switch (controle) {
      case Controle.IGUAL:
        this.#igual();
        break;
      case Controle.SEPARADOR_DECIMAL:
        this.#separadorDecimal()
        break;
      case Controle.MEMÓRIA_LEITURA_LIMPEZA:
        if (this.#historicoControle === Controle.MEMÓRIA_LEITURA_LIMPEZA) {
          this.#memoriaLimpeza();
        } else {
          this.#memoriaLeitura();
        }
        break;
      case Controle.MEMÓRIA_SOMA:
        this.#memoriaSoma();
        break;
      case Controle.MEMÓRIA_SUBTRAÇÃO:
        this.#memoriaSubtracao();
        break;
    }
    this.#historicoControle = controle;
  }

  definaTela(tela: Tela): void {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }

  #memoriaLeitura(): void {
    const valorMemoria = this.#memoria.convertaDigitosParaNumeros();
    if (this.#operador !== undefined) {
      this.#operando2.convertaNumerosParaDigitos(valorMemoria);
      this.#mostreNumero(this.#operando2);
      this.tela.mostreMemoria();
    } else {
      this.#operando1.convertaNumerosParaDigitos(valorMemoria);
      this.#mostreNumero(this.#operando1);
      this.tela.mostreMemoria();
    }
  }

  #memoriaLimpeza() {
    this.#memoria.convertaNumerosParaDigitos(0);
  }

  #memoriaSoma(): void {
    this.recebaControle(Controle.IGUAL);
    const valorAtual = this.#operando1.convertaDigitosParaNumeros();
    const valorMemoria = this.#memoria.convertaDigitosParaNumeros();
    const novoValor = valorMemoria + valorAtual;
    this.#memoria.convertaNumerosParaDigitos(novoValor);
    this.#bandeiraM = true;
  }

  #memoriaSubtracao(): void {
    this.#bandeiraM = true;
    this.recebaControle(Controle.IGUAL);
    const valorAtual = this.#operando1.convertaDigitosParaNumeros();
    const valorMemoria = this.#memoria.convertaDigitosParaNumeros();
    const novoValor = valorMemoria - valorAtual;
    this.#memoria.convertaNumerosParaDigitos(novoValor);
  }

  #separadorDecimal() : void {
    if (this.#operador === undefined) {
      if (this.#operando1.posicaoSeparadorDecimal === -1)
        this.#operando1.posicaoSeparadorDecimal =
          this.#operando1.digitos.length;
    } else {
      if (this.#operando2.posicaoSeparadorDecimal === -1)
        this.#operando2.posicaoSeparadorDecimal =
          this.#operando2.digitos.length;
    }
  }

  reinicie(): void {
    this.tela.limpe();
    this.tela.mostre(Digito.ZERO);
  }

  #mostreNumero(numero: NumeroB3): void {
    this.tela.limpe();
    
    this.tela.mostreSinal(numero.sinal);
    numero.digitos.forEach((digito) => {
      this.tela.mostre(digito);
    });
  }

  #some(): void {
    let numero1: number = this.#operando1.convertaDigitosParaNumeros();
    let numero2: number = this.#operando2.convertaDigitosParaNumeros();

    let resultado = numero1 + numero2;
    
    
    
    this.#operando1.convertaNumerosParaDigitos(resultado);
    this.#mostreNumero(this.#operando1);
  }
  #diminua(): void {
    let numero1: number = this.#operando1.convertaDigitosParaNumeros();
    let numero2: number = this.#operando2.convertaDigitosParaNumeros();

    let resultado = numero1 - numero2;

    this.#operando1.convertaNumerosParaDigitos(resultado);
    this.#mostreNumero(this.#operando1);
  }
  #multiplique(): void {
    let numero1: number = this.#operando1.convertaDigitosParaNumeros();
    let numero2: number = this.#operando2.convertaDigitosParaNumeros();

    let resultado = numero1 * numero2;

    this.#operando1.convertaNumerosParaDigitos(resultado);

    this.#mostreNumero(this.#operando1);
    this.#operadorUsado = 1
  }
  #divida(): void {
    let numero1: number = this.#operando1.convertaDigitosParaNumeros();
    let numero2: number = this.#operando2.convertaDigitosParaNumeros();

    if (numero2 === 0) {
      this.tela.mostreErro();
    } else {
      let resultado = numero1 / numero2;

      this.#operando1.convertaNumerosParaDigitos(resultado);

      this.#mostreNumero(this.#operando1);
    }
  }
  #radicie(): void {
    let numero1: number;
    if (this.#operador !== undefined) {
      numero1 = this.#operando2.convertaDigitosParaNumeros();
    } else {
      numero1 = this.#operando1.convertaDigitosParaNumeros();
    }

    let resultado = numero1 ** 0.5;

    // Armazena o resutado no destino correto
    if (this.#operador !== undefined) {
      this.#operando2.convertaNumerosParaDigitos(resultado);
      this.#mostreNumero(this.#operando2);
    } else {
      this.#operando1.convertaNumerosParaDigitos(resultado);
      this.#mostreNumero(this.#operando1);
    }
  }
  #percentue(): void {
   
    let numero1: number = this.#operando1.convertaDigitosParaNumeros();
    let numero2: number = this.#operando2.convertaDigitosParaNumeros();
    let resultado: number;

    
    if (numero2 === undefined) {
      resultado = numero1
      return;
    } 

    if (this.#operadorUsado === 1) {
      resultado = (numero1 * numero2) / 100
      return
    }

    


    
    

    resultado = (numero1 * numero2) / 100;
    this.#operando2.convertaNumerosParaDigitos(resultado);
    this.#mostreNumero(this.#operando2);
    this.recebaControle(Controle.IGUAL);

  }
  #igual(): void {
    switch (this.#operador) {
      case Operação.SOMA:
        this.#some();
        break;
      case Operação.SUBTRAÇÃO:
        this.#diminua();
        break;
      case Operação.MULTIPLICAÇÃO:
        this.#multiplique();
        break;
      case Operação.DIVISÃO:
        this.#divida();
        break;
    }

    this.#operador = undefined;
    this.#operando2 = new NumeroB3();
  }
}
