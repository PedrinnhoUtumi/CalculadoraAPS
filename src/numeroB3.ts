import { Digito, Sinal } from "./calculadora";

export class NumeroB3 {
    digitos: Digito[] = []
    posicaoSeparadorDecimal: number = 0
    sinal: Sinal = Sinal.POSITIVO

    constructor(){

    }


    #temSeparador(): boolean {
        if(this.posicaoSeparadorDecimal === 0) {
            return false
        }
        return true
    }

    temDigito(): boolean {
        return this.digitos.length > 0
    }

    convertaDigitosParaNumeros(): number {
        let resultado = 0
        this.digitos.forEach(digito => {
            if (this.#temSeparador()) {
                let contador = this.digitos.length
                resultado = resultado / 10 + digito

            }
            resultado = resultado * 10 + digito
        });
        return resultado 
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
    }


}