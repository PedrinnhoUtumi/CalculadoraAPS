import { Controle, Digito, Operação, Sinal } from "./calculadora"
import CpuB3 from "./cpuB3"
import TelaB3 from "./telaB3"
import TelaB3Teste from "./telaB3Teste"


describe("Testando minha calculadora", () => {
    let tela: TelaB3Teste = new TelaB3Teste
    let cpu: CpuB3 = new CpuB3(tela)

    beforeEach(() => {
        cpu.reinicie()
        tela.debug = false

    })

    test("teste soma 12 + 34", () => {
        [Digito.UM, Digito.DOIS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("46")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste soma 1 + 4 + 1", () => {
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("6")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste subtração 5 - 3", () => {
        [Digito.CINCO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("2")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste subtração 1 - 10", () => {
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.UM, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("9")
        expect(tela.sinal).toBe(Sinal.NEGATIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste multiplicação 3 * 4", () => {
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("9")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste divisão 10 / 8", () => {
        [Digito.UM, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.DIVISÃO);
        [Digito.OITO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("1.25")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste raiz de 9", () => {
        [Digito.NOVE].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
        expect(tela.digitos).toBe("3")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste raiz de 100", () => {
        [Digito.UM, Digito.ZERO, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
        expect(tela.digitos).toBe("10")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste percentual de 20", () => {
        [Digito.DOIS, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.PERCENTUAL);
        expect(tela.digitos).toBe("0");
        expect(tela.sinal).toBe(Sinal.POSITIVO);
        expect(tela.memoria).toBeFalsy();
        expect(tela.error).toBeFalsy();
    });

    
    


    test("teste raiz de 10", () => {
        [Digito.UM, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
        expect(tela.digitos).toBe("3.16")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })


    test("teste subtração 4 - 1 - 1", () => {
        [Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("2")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })
    // test("teste soma 34 + 5.6", () => {

    // })
    // test("teste soma 34 + 5.6", () => {

    // })
    
   
    test("teste subtração 34 - 56", () => {
        [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.CINCO, Digito.SEIS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("22")
        expect(tela.sinal).toBe(Sinal.NEGATIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste 1.5 + 3.4", () => {
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        [Controle.SEPARADOR_DECIMAL].forEach((element) => {
            cpu.recebaControle(element)
        });
        [Digito.CINCO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        [Controle.SEPARADOR_DECIMAL].forEach((element) => {
            cpu.recebaControle(element)
        });
        [Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("4.90")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()

        
    })

    test("teste 3 + 50% =", () => {
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.CINCO, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.PERCENTUAL);
        expect(tela.digitos).toBe("4.50")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste 123M+ + 1 =", () => {
        [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.MEMÓRIA_SOMA);
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL)
        expect(tela.digitos).toBe("124")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })
    
    test("teste 123M+ 1 =", () => {
        [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.MEMÓRIA_SOMA);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL)
        expect(tela.digitos).toBe("1")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })
    
    // test("teste 123 = 1 ", () => {
    //     [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
    //         cpu.recebaDigito(element);
    //     });
    //     cpu.recebaControle(Controle.IGUAL);
    //     [Digito.UM].forEach((element) => {
    //         cpu.recebaDigito(element);
    //     });
        
    //     cpu.recebaControle(Controle.IGUAL)
    //     expect(tela.digitos).toBe("1")
    //     expect(tela.sinal).toBe(Sinal.POSITIVO)
    //     expect(tela.memoria).toBeFalsy()
    //     expect(tela.error).toBeFalsy()
    // })

    test("teste 123M+ 1 + 1 =", () => {
        [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.MEMÓRIA_SOMA);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.UM].forEach((element) => {
            cpu.recebaDigito(element);
        });
        
        cpu.recebaControle(Controle.IGUAL)
        expect(tela.digitos).toBe("2")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })
    // test("teste 123M+ + 1 1M+", () => {
    //     [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
    //         cpu.recebaDigito(element);
    //     });
    //     cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    //     cpu.recebaOperacao(Operação.SOMA);
    //     [Digito.UM].forEach((element) => {
    //         cpu.recebaDigito(element);
    //     });
    //     cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    //     cpu.recebaControle(Controle.IGUAL)
    //     expect(tela.digitos).toBe("124")
    //     expect(tela.sinal).toBe(Sinal.POSITIVO)
    //     expect(tela.memoria).toBeFalsy()
    //     expect(tela.error).toBeFalsy()
    // })

    

    test("teste 3 + 50% ", () => {
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.CINCO, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.PERCENTUAL);
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("7.50")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste 4 - 30%", () => {
        [Digito.QUATRO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
        [Digito.TRÊS, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.PERCENTUAL);
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("1.20")
        expect(tela.sinal).toBe(Sinal.NEGATIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    }) 

    test("teste 3 + 50% ==", () => {
        [Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.CINCO, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.PERCENTUAL);
        cpu.recebaControle(Controle.IGUAL);
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("10.50")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

    test("teste divisao 12 / 10", () => {
        [Digito.UM, Digito.DOIS].forEach((element) => {
        cpu.recebaDigito(element) 
        });
        cpu.recebaOperacao(Operação.DIVISÃO);
        [Digito.UM, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
        });
    cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("1.20")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
    })

     test("teste 20 / 0", () => {
        [Digito.DOIS, Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element)
        });
        cpu.recebaOperacao(Operação.DIVISÃO);
        [Digito.ZERO].forEach((element) => {
            cpu.recebaDigito(element)
        })
        cpu.recebaControle(Controle.IGUAL)
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeTruthy()
    })
    
})

