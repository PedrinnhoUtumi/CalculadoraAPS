
//index.ts
import Customer from "./Customer";
import Address from "./Address";
import Display from "./Display";

const display = new Display();
const address = new Address("Minha Rua 67", "Meu Bairro", "Minha Cidade", "RS");
const customer1 = new Customer("Luiz Duarte", "contato@luiztools.com.br", new Date(1988, 4, 25), address);
const customer2 = new Customer("Pedro Duarte", "email@dominio.com", new Date(2014, 10, 3), address);

console.log(customer1.address.toString())
console.log(customer1.getFirstName());
console.log(customer2.getFirstName());
console.log(customer1.isAdult());
console.log(customer2.isAdult());
console.log(display.showNumber(80));






