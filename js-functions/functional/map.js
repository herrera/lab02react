const numbers = [1, 2, 3 , 4, 5]

const numbers2 = numbers.map(function(el) {
    return el *2
})

// outra versao
const numbers21 = numbers.map(el => el *2)

console.log(numbers2)

const students = [
    {name:'Jake', score: 6.4},
    {name:'Suzan', score: 8.6},
    {name:'Emma', score: 9.4},
    {name:'Peter', score: 9.1},
]

const getScore = el =>el.score
console.log(students.map(getScore))
// outra versao
console.log(students.map(el => el.score))

console.log(
    students
        .map(getScore)
        .map(Math.ceil)
)

