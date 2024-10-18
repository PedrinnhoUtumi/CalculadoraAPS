import { Digito, Sinal, Tela } from "./calculadora";

export default class TelaB3 implements Tela {
    mostreMemoria(): void {
        console.log("M   M\nMM MM\nM M M\nM   M\nM   M\n");
    }
    mostreSeparadorDecimal(): void {
        console.log("..\n..\n");
    }
    mostreSinal(sinal: Sinal): void {
        if (sinal === Sinal.NEGATIVO) "-----\n";
    }
    mostreErro(): void {
        console.log("EEEE\nE   \nEE  \nE   \nEEEE\n");
    }
    mostre(digito: Digito): void {
        console.log(digito)
    }

    limpe(): void {
        console.clear()
    }
}