
//1
console.log("Execico 1------");

const nome = "Rodrigo";
const idade = "31";
const cidade = "Santana de Parnaíba";

console.log (`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`);

//2
console.log("Execico 2------");
const base = 5;
const altura = 3;

console.log(`A área do triângulo é: ${base*altura}`);

//3
console.log("Execico 3------");

// == compara apenas o valor
// === compara valor e tipo 

console.log(5 == "5"); 
console.log(5 === "5");

//4
console.log("Execico 4------");


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

//6

const preco= 80;
const deconto = 0.15;

console.log (`O preço do produto é R$ ${preco * deconto}`);
//-----------
const precoFinal = preco * deconto;
console.log(`O preço final do produto é R$ ${precoFinal}`);

//7
console.log("10"+5);
console.log("10"-5);
console.log("10"*"2");
console.log(true+1);
