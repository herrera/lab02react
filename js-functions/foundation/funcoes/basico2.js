const a = (fn) => {
   fn()
}

const teste = function (a) {
    return function (b) {
        return a *b     

    }
}


const exibe1 = function () {
    console.log(`exibe1 `)
}

const exibe2 = function (param) {
  console.log(`exibe2 ${param}`)
}

function exibe0 (fn) {
    if (typeof fn === 'undefined') {
        console.log('parametro nao é funcao')
    } else {
        fn()

    }
}

const aa = teste(7)(6)

// console.log(a())
// console.log(aa)
exibe0(exibe1)
exibe0(exibe2(22))

//retornar uma funcao a partir de uma outra funcao
function potencia(base) {
    return function(exp) {
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)

console.log(potenciaDe2(8))
console.log(potencia(3)(4))

// usando arrow
const potencia1 = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}
// melhorand o arrow
const potencia2 = base => exp => Math.pow(base, exp)
console.log(potencia2(2)(8))

// this
// criando funcao dentro de uma ja predefinido
Array.prototype.log = function() {
    console.log('Opaa')
}
// pegando ultimo elemento
Array.prototype.ultimo = function() {  //this nao funciona com arrow function >> ultimo ==() ={
    console.log(this[this.length-1])
}

const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()