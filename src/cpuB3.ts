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
        if (operação === Operação.RAIZ_QUADRADA) {
            this.raizQuadrade()
        }
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

    some(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 + numero2

        this.#listaPrimeiroNumero = this.#ConvertaNumerosParaDigitos(resultado) 
        this.#listaSegundoNumero = []
    
        this.#mostreDigitos(this.#listaPrimeiroNumero)
    }
    diminua(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 - numero2
    
        this.#listaPrimeiroNumero = this.#ConvertaNumerosParaDigitos(resultado) 
        this.#listaSegundoNumero = []

        this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(resultado))
    }
    multiplique(): void {
        let numero1: number = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        let numero2: number = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        
        let resultado = numero1 * numero2
    
        this.#listaPrimeiroNumero = this.#ConvertaNumerosParaDigitos(resultado) 
        this.#listaSegundoNumero = []

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
            
            this.#listaPrimeiroNumero = this.#ConvertaNumerosParaDigitos(resultado) 
            this.#listaSegundoNumero = []

            this.#mostreDigitos(this.#ConvertaNumerosParaDigitos(resultado))
        }
    }
    raizQuadrade(): void {
        let numero1: number;
        // Verifica se pega o primeiro ou o segundo
        if (this.#operador !== undefined) {
            numero1 = this.#ConvertaDigitosParaNumeros(this.#listaSegundoNumero)
        } else {
            numero1 = this.#ConvertaDigitosParaNumeros(this.#listaPrimeiroNumero)
        }

        // Calcula a raiz
        let resultado = numero1 ** 0.5
        let resultadoDigitos = this.#ConvertaNumerosParaDigitos(resultado)
        
        
        // Armazena o resutado no destino correto
        if (this.#operador !== undefined) {
            this.#listaSegundoNumero = resultadoDigitos 
        } else {
            this.#listaPrimeiroNumero = resultadoDigitos 
        }

        this.#mostreDigitos(resultadoDigitos)
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
                this.raizQuadrade()
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