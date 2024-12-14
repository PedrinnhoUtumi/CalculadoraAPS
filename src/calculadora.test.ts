import { Controle, Digito, Operação, Sinal } from "./calculadora";
import CpuB3 from "./cpuB3";
import TelaB3 from "./telaB3";
import TelaB3Teste from "./telaB3Teste";

describe("Testando minha calculadora", () => {
  let tela: TelaB3Teste = new TelaB3Teste();
  let cpu: CpuB3 = new CpuB3(tela);

  beforeEach(() => {
    cpu.reinicie();
    tela.debug = false;
    tela.memoria = false;
    tela.error = false;
  });

  test("teste soma 12 + 34  => Sara",  () => {
    [Digito.UM, Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("46");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste soma 1 + 4 + 1 => Natália", () => {
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
    expect(tela.digitos).toBe("6");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 5 - 3 => Natália", () => {
    [Digito.CINCO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("2");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 1 - 10 => Natália", () => {
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("9");
    expect(tela.sinal).toBe(Sinal.NEGATIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste multiplicação 3 * 4  => Sara", () => {
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("9");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 10 / 8  => Pedro", () => {
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.OITO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1.25");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste raiz de 9  => Sara", () => {
    [Digito.NOVE].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
    expect(tela.digitos).toBe("3");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste raiz de 100  => Sara", () => {
    [Digito.UM, Digito.ZERO, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
    expect(tela.digitos).toBe("10");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 20% => Lara", () => {
    [Digito.DOIS, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.PERCENTUAL);
    expect(tela.digitos).toBe("0");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste raiz de 10  => Pedro", () => {
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
    expect(tela.digitos).toBe("3.16");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste subtração 4 - 1 - 1 => Natália", () => {
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
    expect(tela.digitos).toBe("2");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste subtração 34 - 56 => Natália", () => {
    [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    [Digito.CINCO, Digito.SEIS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("22");
    expect(tela.sinal).toBe(Sinal.NEGATIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 1.5 + 3.4 = => Lara", () => {
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.SEPARADOR_DECIMAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Digito.CINCO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.SEPARADOR_DECIMAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("4.90");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 3 + 50% => Natália", () => {
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.CINCO, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.PERCENTUAL);
    expect(tela.digitos).toBe("4.50");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 123M+ + 1  => Sara", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("124");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 123M+ 1 =  => Pedro", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 123 = 1   => Pedro", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 123M+ 1 + 1 =  => Pedro", () => {
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

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("2");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 123M+ + 1 1M+ => Lara", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.MEMÓRIA_SOMA);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("124");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 3 + 50% => Natália", () => {
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.CINCO, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.PERCENTUAL);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("7.50");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 4 - 30% => Lara", () => {
    [Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    [Digito.TRÊS, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.PERCENTUAL);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1.20");
    expect(tela.sinal).toBe(Sinal.NEGATIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 3 + 50% = = => Natália", () => {
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
    expect(tela.digitos).toBe("10.50");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("teste 12 / 10 => Lara", () => {
    [Digito.UM, Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1.20");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("123M+ + 1 MRC = => Lara", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_SOMA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Operação.SOMA].forEach((element) => {
      cpu.recebaOperacao(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_LEITURA_LIMPEZA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Controle.IGUAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    expect(tela.digitos).toBe("246");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeTruthy();
    expect(tela.error).toBeFalsy();
  });

  test("123M+ + 1 MRC 1 = => Lara", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_SOMA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Operação.SOMA].forEach((element) => {
      cpu.recebaOperacao(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_LEITURA_LIMPEZA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.IGUAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    expect(tela.digitos).toBe("124");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeTruthy();
    expect(tela.error).toBeFalsy();
  });

  test("123M+ + 1 MRC MRC = => Lara", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_SOMA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Operação.SOMA].forEach((element) => {
      cpu.recebaOperacao(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_LEITURA_LIMPEZA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Controle.MEMÓRIA_LEITURA_LIMPEZA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Controle.IGUAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    expect(tela.digitos).toBe("246");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeTruthy();
    expect(tela.error).toBeFalsy();
  });

  test("123M- + 1 = -> Natália", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_SUBTRAÇÃO].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Operação.SOMA].forEach((element) => {
      cpu.recebaOperacao(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.IGUAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    expect(tela.digitos).toBe("124");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });

  test("123M- + 1 MRC = => Natália", () => {
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_SUBTRAÇÃO].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Operação.SOMA].forEach((element) => {
      cpu.recebaOperacao(element);
    });
    [Digito.UM].forEach((element) => {
      cpu.recebaDigito(element);
    });
    [Controle.MEMÓRIA_LEITURA_LIMPEZA].forEach((element) => {
      cpu.recebaControle(element);
    });
    [Controle.IGUAL].forEach((element) => {
      cpu.recebaControle(element);
    });
    expect(tela.digitos).toBe("246");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeTruthy();
    expect(tela.error).toBeFalsy(); 
  });

  test("teste 20 / 0 => Lara", () => {
    [Digito.DOIS, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeTruthy();
  });
  test("teste 50 + 10 ÷ 2 × 3 - 5 + raiz de 16 + 10% => Natália", () => {
    [Digito.CINCO, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SOMA);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
    [Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
     [Digito.CINCO].forEach((element) => {
         cpu.recebaDigito(element)
     })
    cpu.recebaOperacao(Operação.SOMA);
     [Digito.UM, Digito.SEIS].forEach((element) => {
         cpu.recebaDigito(element)
     })
     cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
     cpu.recebaOperacao(Operação.SOMA);
     [Digito.UM, Digito.ZERO].forEach((element) => {
         cpu.recebaDigito(element)
     })
     cpu.recebaOperacao(Operação.PERCENTUAL);
    expect(tela.digitos).toBe("97.90");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });
});
