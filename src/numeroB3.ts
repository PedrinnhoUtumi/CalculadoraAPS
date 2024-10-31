import { Digito, Sinal } from "./calculadora";

export class NumeroB3 {
    digitos: Digito[] = []
    posicaoSeparadorDecimal: number = 0
    sinal: Sinal = Sinal.POSITIVO

    constructor(){

    }


    temSeparador(): boolean {
        return this.posicaoSeparadorDecimal === 0
    }

    temDigito(): boolean {
        return this.digitos.length > 0
    }

    convertaDigitosParaNumeros(): number {
        let resultado = 0
        this.digitos.forEach(digito => {
            // if (this.temSeparador()) {
            //     let contador = this.digitos.length
            //     resultado = resultado / 10 + digito
            // }
            resultado = resultado * 10 + digito
        });
        resultado = resultado //(10 ** this.digitos.length - this.posicaoSeparadorDecimal)
        return resultado * (this.sinal == Sinal.NEGATIVO?-1:1)
    }

    convertaNumerosParaDigitos(resultado: number): void {
        let result: Digito[] = []
        while (resultado > 0) {
            let digito = resultado % 10
            result.push(digito)
            resultado = (resultado - digito) / 10
        }
        if (result.length === 0) {
            result.push(Digito.ZERO)
        }
        this.digitos = result.reverse()
        this.sinal = resultado>=0?Sinal.POSITIVO:Sinal.NEGATIVO
    }
}