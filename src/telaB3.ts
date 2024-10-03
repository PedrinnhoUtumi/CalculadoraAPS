import { Digito, Tela } from "./calculadora";

export default class TelaB3 implements Tela {
    mostre(digito: Digito): void {
        console.log(digito)
    }

    limpe(): void {
        console.clear()
    }
}