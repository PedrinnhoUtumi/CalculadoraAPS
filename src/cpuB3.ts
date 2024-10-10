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
        if(!this.#operador) {
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
        if (this.#operador && this.#listaSegundoNumero.length !== 0) {
            this.recebaControle(Controle.IGUAL)
        }
        this.#operador = operação
    }
    recebaControle(controle: Controle): void {
        switch(controle){
            case 6:
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

    some(): void {
        let resultado = this.#listaPrimeiroNumero[0] + this.#listaSegundoNumero[0]
        this.tela.mostre(resultado)
        console.log(typeof(this.#listaSegundoNumero[0]));
        
    }
    diminua(): number {
        let resultado = this.#listaPrimeiroNumero[0] - this.#listaSegundoNumero[0]
        return resultado
    }
    multiplique(): number {
        let resultado = this.#listaPrimeiroNumero[0] * this.#listaSegundoNumero[0]
        return resultado
    }
    divida(): number {
        if (this.#listaSegundoNumero[0] === 0) {
            console.error("E0")
            return 0
        }
        let resultado = this.#listaPrimeiroNumero[0] / this.#listaSegundoNumero[0]
        return resultado
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
            case 0:
                this.some()
                break
            case 1:
                this.tela.mostre(this.diminua())
                break
            case 2:
                this.tela.mostre(this.multiplique())
                break
            case 3:
                this.tela.mostre(this.divida())
                break
            case 4:
                this.tela.mostre(this.raizQuadrade())
                break
            case 5:
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