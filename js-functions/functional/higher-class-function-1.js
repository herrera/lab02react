// Funcoes que operam outras funções
// ou usando deles como argumento ou retornando eles,
// sao chamados de higher-order functions 

function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello')
}

run(sayHello)

// declarando como funcao anonima
run(function() {
    console.log('run')
})