let teclado = require("readline-sync");

let pessoas: number = 0;
let media: number = 0;
const ml = 300;
const litros = 1000;

console.log("digite o número de pessoas");
pessoas = teclado.questionInt();

if (pessoas >= 0) { 
  media = pessoas * ml / litros;  
  media = Math.ceil(media);
  console.log("devem ser compradas " +  media + " garrafas");
}
else {
  console.log("O número de pessoas não pode ser negativo.");
}






