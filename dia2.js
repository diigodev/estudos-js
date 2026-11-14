const nome = "Rodrigo"; //não pode ser reatribuída
let idade = "30"; //pode mudar mas só pode ser usada dentro do escopo(bloco) onde foi clarada 
idade = 31; //ok

console.log(`olá, ${nome}! Você tem ${idade} anos.`);

const texto = "JabaScript"; //string
const numero = 42; //number inteiros
const decimal = 3.14; //number
const ativo = true; // boolean
const vazio = null; //ausencia de valor
let indefinido; // declarada mas não inicializada, undefined

//typeof retorna o tipo de dado da variável

console.log(typeof texto);       // "string"
console.log(typeof numero);      // "number"
console.log(typeof ativo);       // "boolean"
console.log(typeof indefinido);  // "undefined"
console.log(typeof vazio);       // "object" (bug histórico da linguagem!)

console.log(texto);       // "string"
console.log(numero);      // "number"
console.log(ativo);       // "boolean"
console.log(indefinido);  // "undefined"
console.log(vazio);       // "object" (bug histórico da linguagem!)

