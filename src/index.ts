// import { Tela } from "./Tela";
// import { MinhaTela } from "./Tela";

// const tela = new Tela();
// const minhaTela = new MinhaTela()

// tela.clear()
// tela.showNumber(9)

// minhaTela.showNumber(213)

import { Cpu } from "./Cpu";
const d = new Cpu()
d.Adicao(1, 3)
d.RaizQuadrada(4)
try {
    d.Divisao(2, 0)
} catch(error) {
    console.error(error)
}