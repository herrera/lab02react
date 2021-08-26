function logParam(a,b,c) {
    console.log(a,b,c)
}

logParam(12, 'Pedro')

function defaultPara(a=10, b=20,c=30 ) {
    console.log(a,b,c)
}

defaultPara(1, 'Herrera')

function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}

logNums([1,3,5,7])

// mesmo q antes, com spread
function logNums2(...nums) {
    console.log('Spread')
    for(let n of nums) {
        console.log(n)
    }
}

logNums2(9,11,13,15)

//mesmo q antes, melhorado
function logNums3(...nums) {
    console.log(nums)
}

logNums3(9,11,13,15)