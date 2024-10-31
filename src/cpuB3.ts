import { Controle, Cpu, Digito, Operação, Tela, Sinal } from "./calculadora";
import { NumeroB3 } from "./numeroB3";


export default class CpuB3 implements Cpu {
    tela!: Tela;
    #operando1: NumeroB3 = new NumeroB3();
    #operando2: NumeroB3 = new NumeroB3();
    #operador: Operação | undefined = undefined; 
    #separadorDecimal: Controle | undefined = undefined;
    #memoria: NumeroB3 = new NumeroB3();
    #operacaoCorrente: Operação | undefined = undefined;
    #historicoControle: Controle | undefined = undefined

    constructor(tela: Tela) {
        this.definaTela(tela)
    }
    
    recebaDigito(digito: Digito): void {
        if(this.#operador === undefined) {
            if (!this.#operando1.temDigito()) {
                this.tela.limpe()
            }
            this.#operando1.digitos.push(digito)
        } else {
            if (!this.#operando2.temDigito()) {
                this.tela.limpe()
            }
            this.#operando2.digitos.push(digito)
        }
        this.tela.mostre(digito)        
    }
    recebaOperacao(operação: Operação): void {
        if (operação === Operação.RAIZ_QUADRADA) {
            this.#radicie()
            return
        }
        if (this.#operador !== undefined && this.#operando2.temDigito()) {
            this.recebaControle(Controle.IGUAL)            
        }
        this.#operador = operação
        this.#operacaoCorrente = operação
    }
    recebaControle(controle: Controle): void {
        switch(controle){
            case Controle.IGUAL:
                this.#igual()
                break
            case Controle.SEPARADOR_DECIMAL:
                if(this.#operador === undefined){
                    if(this.#operando1.posicaoSeparadorDecimal===0)
                        this.#operando1.posicaoSeparadorDecimal = this.#operando1.digitos.length
                }else{
                    if(this.#operando2.posicaoSeparadorDecimal===0)
                        this.#operando2.posicaoSeparadorDecimal = this.#operando2.digitos.length
                }
                break
            // case Controle.DESATIVAÇÃO:
            // case Controle.ATIVAÇÃO_LIMPEZA_ERRO:
            // case Controle.MEMÓRIA_LEITURA_LIMPEZA:
            //     if 
            // case Controle.MEMÓRIA_SOMA:
            // case Controle.MEMÓRIA_SUBTRAÇÃO:
        }
        this.#historicoControle = controle

    }
    definaTela(tela: Tela): void {
        this.tela = tela
    }
    obtenhaTela(): Tela {
        return this.tela
    }
    reinicie(): void {
        this.tela.limpe()
        this.tela.mostre(Digito.ZERO)
    }

    #mostreNumero(numero: NumeroB3): void {
        this.tela.limpe()
        
        numero.digitos.forEach(digito => {
            this.tela.mostre(digito)
            
        })
       this.tela.mostreSinal(numero.sinal)
    }

    #some(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()

        let resultado = numero1 + numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 

        this.#mostreNumero(this.#operando1)
    }
    #diminua(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()
        
        let resultado = numero1 - numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 
    
        this.#mostreNumero(this.#operando1)
    }
    #multiplique(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()
        
        let resultado = numero1 * numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 
    
        this.#mostreNumero(this.#operando1)
    }
    #divida(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()

        if (numero2 === 0) {
            this.tela.mostreErro()

        } else {
            let resultado = numero1 / numero2
            
            this.#operando1.convertaNumerosParaDigitos(resultado) 

            this.#mostreNumero(this.#operando1)
        }
    }
    #radicie(): void {
        let numero1: number;
        // Verifica se pega o primeiro ou o segundo
        if (this.#operador !== undefined) {
            numero1 = this.#operando2.convertaDigitosParaNumeros()
        } else {
            numero1 = this.#operando1.convertaDigitosParaNumeros()
        }

        // Calcula a raiz
        let resultado = numero1 ** 0.5        
        
        // Armazena o resutado no destino correto
        if (this.#operador !== undefined) {
            this.#operando2.convertaNumerosParaDigitos(resultado) 
            this.#mostreNumero(this.#operando2)
        } else {
            this.#operando1.convertaNumerosParaDigitos(resultado) 
            this.#mostreNumero(this.#operando1)
        }
        

    }
    #percentue(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()

        let resultado = (numero1 * numero2) / 100
        
        this.#operando2.convertaNumerosParaDigitos(resultado)

        this.recebaControle(Controle.IGUAL)

    }
    #igual(): void {
        switch(this.#operador){
            case Operação.SOMA:
                this.#some()
                break
            case Operação.SUBTRAÇÃO:
                this.#diminua()
                break
            case Operação.MULTIPLICAÇÃO:
                this.#multiplique()
                break
            case Operação.DIVISÃO:
                this.#divida()
                break
        }
    }
}
