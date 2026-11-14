const nome = "Rodrigo"; //não pode ser reatribuída
let idade = "30"; //pode mudar mas só pode ser usada dentro do escopo(bloco) onde foi clarada 
idade = 31; //ok

console.log(`olá, ${nome}! Você tem ${idade} anos.`);