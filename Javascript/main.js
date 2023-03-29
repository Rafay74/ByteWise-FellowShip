// log a statement using console

console.log("This is working")

//variables

let age = 24
console.log(age)
/*
 this wont change the value of salary as it is constant
 */
const salary = 0
//salary = 1000;
console.log(salary)


let sum = 0
sum = 21
console.log(sum)

/* DATA TYPES
    TWO types: primitive and non primitive

    Primitive:
    String
    Number
    Boolean
    Undefined
    Null
    BigInt
    Symbol

    Non-Primitive:
    Objects
*/

//String
const name = "Rafay"
const language = "Javacscript"

const total = 0
const PI = 3.14

const isPrimary = true
const isNew = false

let result
console.log(result)

const res = undefined

const data = null

const Person = {
    'firstName': 'treace',
    'lastName': 'zokie',
    age: 30
}

console.log(Person.lastName)


const list = [1, 2, 4, 6, 7]
console.log(list[2])


//Operator

let x = 12
let y = 32
console.log(x + y)
console.log(x % y)


// logical operator


const isItOK = x > 20 && 8 < y
console.log(isItOK)

const isValidNumber = x > 20 || 8 < y
console.log(isValidNumber)

const isValid = true
console.log(!isValid)


//Type conversions!
/* implicit : js itself convert the data type
    explicit: u convery manually
 */

//implicit
console.log(true + '3')
console.log('Bruce' - 'Wayne')
console.log()


//Equality:
/*
== (Allows coercion)
=== (Does not allow coercion) */

const var1 = 'test'
const var2 = 'test'

console.log(var1 == var2)
console.log(var2 === var2)
