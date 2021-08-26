 // funcao anonima
 // IIFE - Immediately Invoked Function Expression
 (function (a,b,c) {
    console.log(`Result: ${a + b  +c}`) 
 })(1,2,3);

 //se duas funcoes colocar ponto e virgular na primeira
 (function (a,b,c) {
    console.log(`Result: ${a + b  +c}`) 
 })(1,2,5);

 //outra de forma de escrever - sem parametro
 (() => {
     console.log("arrow 01")
 })();

 // com return implicito
 (() =>  console.log("arrow 02"))()