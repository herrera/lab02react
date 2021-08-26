const somar = function(valor1) {
    return function(valor2) {
        return function(valor3) {
            return valor1 + valor2 + valor3
        }
    }
}

const total = somar(3)(4)(5)
console.log(total)

console.log('-------------------------')
const soma = (a,b) => a + b 
const multiplica = (a,b) => a * b 

function calcular(a)  {
    return function(b) {
        return function (fn) {
            return fn(a,b)
        }
    }
}

console.log(calcular(3)(5)(soma))
console.log(calcular(3)(5)(multiplica))