import { Controle, Digito, Operação, Sinal } from "./calculadora"
import CpuB3 from "./cpuB3"
import TelaB3 from "./telaB3"
import TelaB3Teste from "./telaB3Teste"


describe("Testando minha calculadora", () => {
    let tela: TelaB3Teste = new TelaB3Teste
    let cpu: CpuB3 = new CpuB3(tela)



    test("teste soma 123 + 456", () => {
        console.log("= Testando 123 + 456 ===========================");
        [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe(579)
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste soma 12 + 34 + 56", () => {

    })

    test("teste divisao 12 / 10", () => {

    })
})

