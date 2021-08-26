// curring
function finalPrice(tx) {
    return function(price) {
        return price * (1+ tx)
    }
}

console.log(finalPrice(0.0875)(25.1))
console.log(finalPrice(0.0875)(21.7))

const nyFinalPrice = finalPrice(0.0875)
console.log(nyFinalPrice(25.1))
console.log(nyFinalPrice(21.7))

