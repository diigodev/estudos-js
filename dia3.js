const nota = 3;

if(nota === 7.5){
    console.log("Aprovado");
}else if (nota >= 5){
    console.log("Recuperação");
}else if (nota >= 8){
    console.log("Na lata");
} else {
    console.log("Reprovado");
}

//

const idade = 31;
const temcarteira = true;

if (idade >=18 && temcarteira){
    console.log("Pode dirigir");
} 

const status = nota >= 7 ? "Aprovado" : "Reprovado"; //if/else simplificado em uma só linha, usando operador ternário
console.log(status);

