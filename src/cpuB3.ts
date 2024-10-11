import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora";

export default class CpuB3 implements Cpu {
    tela!: Tela;
    #listaPrimeiroNumero: Digito[] = [];
    #listaSegundoNumero: Digito[] = [];   
    #operador: Operação | undefined = undefined;  

    constructor(tela: Tela) {
        this.definaTela(tela)
    }
    
    recebaDigito(digito: Digito): void {
        if(this.#operador === undefined) {
            if (this.#listaPrimeiroNumero.length === 0) {
                this.tela.limpe()
            }
            this.#listaPrimeiroNumero.push(digito)
        } else {
            if (this.#listaSegundoNumero.length === 0) {
                this.tela.limpe()
            }
            this.#listaSegundoNumero.push(digito)
        }
        this.tela.mostre(digito)
    }
    recebaOperacao(operação: Operação): void {
        console.log(this.#listaSegundoNumero);
        if (this.#operador !== undefined && this.#listaSegundoNumero.length !== 0) {
            this.recebaControle(Controle.IGUAL)            
        }
        this.#operador = operação
    }
    recebaControle(controle: Controle): void {
        switch(controle){
            case Controle.IGUAL:
                this.igual()
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

    #ConvertaDigitosParaNumeros(digitos: Digito[]): number{
        let resultado = 0
        digitos.forEach(digito => {
            resultado = resultado * 10 + digito
        });
        return resultado
    }

    #ConvertaNumerosParaDigitos(resultado: number): Digito[]{
        let result: Digito[] = []
        while (resultado > 0) {
            let digito = resultado % 10
            result.push(digito)
            resultado = (resultado - digito) / 10
        }
        if(result.length === 0) {
            result.push(Digito.ZERO)
        }
        return result.reverse()
    }

    #mostreDigitos(digitos: Digito[]): void {
        this.tela.limpe()
        digitos.forEach(digito => {
            this.tela.mostre(digito)            
        })
    }

    #verifiqueOperador(numero: number): void{
        // if (this.#operador !== undefined && this.#operador !== null) {
        //     this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(numero))
        //     let n: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        //     numero = numero + n
        // }
    }

    some(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 + numero2

        this.#listaPrimeiroNumero = this.#ConvertaNumerosParaDigitos(resultado) 
        this.#listaSegundoNumero = []
        // this.#verifiqueOperador(resultado)
    
        this.#mostreDigitos(this.#listaPrimeiroNumero)
    }
    diminua(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 - numero2
    
        this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(resultado))
    }
    multiplique(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 * numero2
    
        this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(resultado))
    }
    divida(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        if (numero2 === 0) {
            this.tela.limpe()
            console.error("E0")
        } else {
            let resultado = numero1 / numero2
            this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(resultado))
        }
    }
    raizQuadrade(): number {
        let resultado = Math.sqrt(this.#listaPrimeiroNumero[0])
        return resultado
    }
    percentue(): number {
        let resultado = this.#listaPrimeiroNumero[0] / 100
        return resultado
    }
    igual(operacao = this.#operador): void {
        switch(operacao){
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
            case Operação.RAIZ_QUADRADA:
                this.tela.mostre(this.raizQuadrade())
                break
            case Operação.PERCENTUAL:
                this.tela.mostre(this.percentue())
                break
        }
    }
}




    // DESATIVAÇÃO,
    // ATIVAÇÃO_LIMPEZA_ERRO,
    // MEMÓRIA_LEITURA_LIMPEZA,
    // MEMÓRIA_SOMA,
    // MEMÓRIA_SUBTRAÇÃO,
    // SEPARADOR_DECIMAL,