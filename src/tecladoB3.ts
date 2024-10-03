import { Controle, Digito, Operação, Teclado } from "./calculadora";

export default class TecladoB3 implements Teclado {
    digite(digito: Digito): void{
        throw new Error("Method not implemented.");
    }
    digite(operação: Operação): void{
        throw new Error("Method not implemented.");
    }
    digite(controle: Controle): void{
        throw new Error("Method not implemented.");
    }

}