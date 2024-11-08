import { Digito, Sinal } from "./calculadora";

export class NumeroB3 {
    digitos: Digito[] = []
    posicaoSeparadorDecimal: number = 0
    sinal: Sinal = Sinal.POSITIVO

    constructor() {
    }

    temSeparador(): boolean {
        return this.posicaoSeparadorDecimal === 0
    }

    temDigito(): boolean {
        return this.digitos.length > 0
    }

    convertaDigitosParaNumeros(): number {
        let resultadoInteiro = 0, resultadoDecimal = 0
        let digitosInteiros = this.digitos.slice(0, this.posicaoSeparadorDecimal ? this.posicaoSeparadorDecimal : this.digitos.length)
        let digitosDecimais = this.digitos.slice(this.posicaoSeparadorDecimal ? this.posicaoSeparadorDecimal : this.digitos.length).reverse()

        digitosDecimais.forEach(digito => {
            resultadoDecimal = (resultadoDecimal + digito) / 10
        });
        digitosInteiros.forEach(digito => {
            resultadoInteiro = resultadoInteiro * 10 + digito
        });

        return resultadoInteiro + resultadoDecimal * (this.sinal == Sinal.NEGATIVO ? -1 : 1);
    }

    convertaNumerosParaDigitos(resultado: number): void {
        let result: Digito[] = []
        this.sinal = resultado >= 0 ? Sinal.POSITIVO : Sinal.NEGATIVO
        resultado = Math.abs(resultado)
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