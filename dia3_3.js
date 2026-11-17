for (let i = 4; i <= 5; i++) {
  console.log(`Volta ${i}`);
}

let soma = 0;
for (let i = 1; i <= 10; i++) {
   console.log(soma); 
  soma += i;
}
console.log(soma); // 55

//somar a volta(i) + o valor da variavel 'soma', que vai acumulando o valor de i a cada volta do loop.