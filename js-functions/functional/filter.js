const numbers = [1, 2, 3 , 4, 5]

const gtThanZero = el => el > 0
const gtThanTen = el => el > 10
const even = el => el % 2 === 0

console.log(numbers.filter(el=> el> 0))
console.log(numbers.filter(gtThanZero))
console.log(numbers.filter(gtThanTen))
console.log(numbers.filter(even))

const students = [
    {name:'Jake', score: 6.4},
    {name:'Suzan', score: 8.6},
    {name:'Emma', score: 9.4},
    {name:'Peter', score: 9.1},
]

const greatStudent = student => student.score >= 9
console.log(students.filter(greatStudent))




