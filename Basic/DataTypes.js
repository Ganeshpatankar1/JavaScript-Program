// Premetive DataType 
// String, Number, Boolean, Null, Undifien, Symbol, BigInt
// const scoreValue = 100
// const score = 200.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail

// const id = Symbol('123')
// const anotherId = ('123')

// Non-Premetive DataType
// Array, Object, Functions

// const heros = ["shaktiman", "nagaraj", "dangaraj"]

// const myFunction = function(){
//     console.log("Hello Javascript")    
// }
// console.log(typeof heros)






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// **********************************Memory**********************************************

// 1.Stack Memory (Primitive) 2.Heap Memory (Non-Premitive)

// let myName = "Ganesh Patankar"
// let anotherName = myName
// anotherName = "Jay Hanuman"
// console.log(anotherName)
// console.log(myName)

let userOne = {
    email : "user@gmail.com",
    uip : "user@paypal.com"
}
let userTwo = userOne

userTwo.email = "ganesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);
