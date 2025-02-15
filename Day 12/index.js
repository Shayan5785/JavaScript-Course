// Comparison Operators
// <     >   ==  !=  <=     >= 

// let num1 = 5
// let num2 = 3

// console.log(num1 < num2) // false
// console.log(num1 > num2) // true
// console.log(num1 == num2) // false

// let num3 = 10
// let num4 = 5
// console.log(num1 != num3) // true
// console.log(num1 >= num4) // true
// console.log(num1 <= 8) // true





// Conditional Statement 
// if else

// syntax
// if (condition) {
//     // action to perform when it is true
// } else {
//     // action to perform then it is false
// }



// Example 1

// let age = 20

// if (age > 18) {
//     console.log("Eligible to vote")
// } else {
//     console.log("Not eligible to vote")
// }




// // Example 2

// let userName = 'shayan'
// let password = 123

// // nested if else
// if (userName == 'shayan') {
//     if (password == 1234) {
//         console.log("You are logged in")
//     } else {
//         console.log("Invalid password")
//     }
// } else {
//     console.log("Create an account")
// }


// Example 3

let userName = prompt("Enter your username: ")
let password = prompt("Enter your password: ")

if (userName == 'shayan') {
    if (password == 1234) {
        console.log("Welcome Shayan! You are logged in")
    } else {
        console.log("Invalid password")
    }
} else if (userName == 'hashir') {
    if (password == 4321) {
        console.log("Welcome Hashir! You are logged in")
    } else {
        console.log("Invalid password")
    }
} else {
    console.log("Create an account")
}






