import { Controle, Cpu, Digito, Operação, Tela, Sinal } from "./calculadora";
import { NumeroB3 } from "./numeroB3";


export default class CpuB3 implements Cpu {
    tela!: Tela;
    #operando1: NumeroB3 = new NumeroB3();
    #operando2: NumeroB3 = new NumeroB3();
    #operador: Operação | undefined = undefined; 
    #separadorDecimal: Controle | undefined = undefined;

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
            this.radicie()
            return
        }
        if (this.#operador !== undefined && this.#operando2.temDigito()) {
            this.recebaControle(Controle.IGUAL)            
        }
        this.#operador = operação
    }
    recebaControle(controle: Controle): void {
        switch(controle){
            case Controle.IGUAL:
                this.igual()
                break
            case Controle.SEPARADOR_DECIMAL:
                //
                break
        }
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

    // #temSeparador(): boolean {
    //     if (this.#separadorDecimal !== undefined) {
    //         return true
    //     }
    //     return false
    // }

    // numero.convertaDigitosParaNumeros(digitos: Digito[]): number{
    //     let resultado = 0
    //     digitos.forEach(digito => {
    //         if (this.#temSeparador()) {
    //             let contador = digitos.length
    //             resultado = resultado / 10 + digito
                
    //         }
    //         resultado = resultado * 10 + digito
    //     });
    //     return resultado
    // }

    // numero.convertaNumerosParaDigitos(resultado: number): Digito[]{
    //     let result: Digito[] = []
    //     while (resultado > 0) {
    //         let digito = resultado % 10
    //         result.push(digito)
    //         resultado = (resultado - digito) / 10
    //     }
    //     if(result.length === 0) {
    //         result.push(Digito.ZERO)
    //     }
    //     return result.reverse()
    // }

    #mostreDigitos(digitos: Digito[]): void {
        // this.tela.limpe()
        digitos.forEach(digito => {
            this.tela.mostre(digito)
            
        })
    }

    some(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()
        
        let resultado = numero1 + numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 

        this.#mostreDigitos(this.#operando1.digitos)
    }
    diminua(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()
        
        let resultado = numero1 - numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 
    
        this.#mostreDigitos(this.#operando1.digitos)
    }
    multiplique(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()
        
        let resultado = numero1 * numero2

        this.#operando1.convertaNumerosParaDigitos(resultado) 
    
        this.#mostreDigitos(this.#operando1.digitos)
    }
    divida(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()

        if (numero2 === 0) {
            this.tela.mostreErro()

        } else {
            let resultado = numero1 / numero2
            
            this.#operando1.convertaNumerosParaDigitos(resultado) 

            this.#mostreDigitos(this.#operando1.digitos)
        }
    }
    radicie(): void {
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
            this.#mostreDigitos(this.#operando2.digitos)
        } else {
            this.#operando1.convertaNumerosParaDigitos(resultado) 
            this.#mostreDigitos(this.#operando1.digitos)
        }
        

    }
    percentue(): void {
        let numero1: number = this.#operando1.convertaDigitosParaNumeros()
        let numero2: number = this.#operando2.convertaDigitosParaNumeros()

        let resultado = (numero1 * numero2) / 100
        
        this.#operando2.convertaNumerosParaDigitos(resultado)

        this.recebaControle(Controle.IGUAL)

    }
    igual(): void {
        switch(this.#operador){
            case Operação.SOMA:
                this.some()
                break
            case Operação.SUBTRAÇÃO:
                this.diminua()
                break
            case Operação.MULTIPLICAÇÃO:
                this.multiplique()
                break
            case Operação.DIVISÃO:
                this.divida()
                break
        }
    }
}
