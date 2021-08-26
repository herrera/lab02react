//reducer recebe quatro parametros: acumulador, valor atual, index atual, array orig
// sintaxe
//array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
const numbers = [1, 2, 3, 4, 5, 6]

const sum =( total, el) => total + el

const total = numbers.reduce((total, el) => total + el)
// valor inicial = 10
const total2 = numbers.reduce(sum, 10)

// calculo media

const avg= (acc, el, i, array) => {
    if (i === array.length -1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
const media = numbers.reduce(avg)


console.log(total, total2, media)