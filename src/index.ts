import Scanner from "@codeea/scanner";

console.log("Olá mundo");

const scanner = new Scanner();

const text = scanner.question("Informe um texto");
const floatNumber = scanner.questionFloat("Informe um número com decimal");
const intNumber = scanner.question("Informe um número inteiro");

console.log("Texto ", text);
console.log("Número Decimal", floatNumber);
console.log("Número Inteiro ", intNumber);

scanner.close();
