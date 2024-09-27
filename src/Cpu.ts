//isso nao necessariamente é no cpu. ta no projeto todo
//enum operacao
//enum controle

//OPERACOES QUE TEM
//soma
//subtracao
//multiplicacao
//divisao
//raiz

//OPERAÇÃO CONTROLE
//off
//on_ce
//memory_read_clear
//memory_sum
//memory_subtractiot
//decimal_separator

//TEM OS DIGITOS TBM -> ACHO QUE ISSO É NO KEYBOARD

export class Cpu {
    Adicao(valor1: number, valor2: number): void{
        console.log(valor1 + valor2)
    }

    Subtracao(valor1: number, valor2: number): void{
        console.log(valor1 - valor2)
    }

    Multiplicacao(valor1: number, valor2: number): void{
        console.log(valor1 * valor2)
    }

    Divisao(valor1: number, valor2: number): void{
        if (valor2 !== 0) {
            console.log(valor1 / valor2)
        } else {
            throw new Error("E" + 0)
        }
    }

    RaizQuadrada(valor1: number): void{
        console.log(Math.sqrt(valor1))
    }
}

