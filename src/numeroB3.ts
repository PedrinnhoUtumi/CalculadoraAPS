import { Digito, Sinal } from "./calculadora";

export class numeroB3 {
    digitos: Digito[] = []
    posicaoSeparadorDecimal: number = 0
    sinal: Sinal = Sinal.POSITIVO

    #temSeparador(): boolean {
        if(this.posicaoSeparadorDecimal === 0) {
            return false
        }
        return true
    }

    ConvertaDigitosParaNumeros(digitos: Digito[]): number {
        let resultado = 0
        digitos.forEach(digito => {
            if (this.#temSeparador()) {
                let contador = digitos.length
                resultado = resultado / 10 + digito

            }
            resultado = resultado * 10 + digito
        });
        return resultado / (10 ^ (this.digitos.length - this.posicaoSeparadorDecimal));
    }

    ConvertaNumerosParaDigitos(resultado: number): Digito[] {
        let result: Digito[] = []
        while (resultado > 0) {
            let digito = resultado % 10
            result.push(digito)
            resultado = (resultado - digito) / 10
        }
        if (result.length === 0) {
            result.push(Digito.ZERO)
        }
        return result.reverse()
    }


}