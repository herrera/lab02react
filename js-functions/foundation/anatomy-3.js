// funcao anonima
const increment1 = function(n) {
    return  n + 1
}
//funcao arrow é sempre uma funcao anonima
const increment2 = (n) => {
    return  n + 1
}
// Se um unico parametro
const increment3 = n => {
    return  n + 1
}
// return implicito
const increment4 = n =>   n + 1


console.log(increment1(3))
console.log(increment2(5))
console.log(increment3(54))
console.log(increment3(34))

const  sum = (a,b) => a+b

console.log(sum(3,4))

// alteracao no hotfix