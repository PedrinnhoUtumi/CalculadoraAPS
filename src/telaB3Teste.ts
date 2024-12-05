import { Digito, Sinal, Tela } from "./calculadora";

export default class TelaB3Teste implements Tela {
  digitos: string = "";
  memoria: boolean = false;
  error: boolean = false;
  sinal: Sinal = Sinal.POSITIVO;

  debug: boolean = false;

  mostreMemoria(): void {
    this.memoria = true;
    if (this.debug) console.log("M");
  }
  mostreSeparadorDecimal(): void {
    this.digitos += ".";
    if (this.debug) console.log(".");
  }
  mostreSinal(sinal: Sinal): void {
    this.sinal = sinal;
    if (this.debug) console.log(sinal == Sinal.POSITIVO ? "+" : "-");
  }
  mostreErro(): void {
    this.error = true;
    if (this.debug) console.log("E");
  }
  mostre(digito: Digito): void {
    this.digitos += digito;
    if (this.debug) console.log(digito);
  }
  limpe(): void {
    this.digitos = "";
    if (this.debug) console.log("Tela::limpe()");
  }
}
