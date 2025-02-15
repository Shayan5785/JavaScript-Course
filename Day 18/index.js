// function sum(num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// let res = sum(5, 10)
// let res2 = sum(10, 10)
// console.log(res / 2) // 7.5
// console.log(res2 / 5)  // 4



function calc(num1, num2, operation) {
    let result
    if (operation == "+") {
        result = num1 + num2
    } else if (operation == "-") {
        result = num1 - num2
    } else if (operation == "*") {
        result = num1 * num2
    } else if (operation == "/") {
        result = num1 / num2
    } else {
        result = null
    }
    return result
}

let userNum1 = +prompt("Enter the first number:") 
let userNum2 = +prompt("Enter the second number:") 
let userOperation = prompt("Enter the operation(+, - * ,/):")

let res = calc(userNum1, userNum2, userOperation) // nunmber null

if (res != null) {
    console.log(res)
} else {
    console.log("Invalid Operation")
}

// let sum = calc(2,3,"+")
// console.log(sum)

// let div = calc(4,2,"/")
// console.log(div)

// console.log(calc(2,3,"+"))

// let invalidCalc = calc(5,10,"a") 
// console.log(invalidCalc)


// let x; // variable initialization
// console.log(x)
// x = null // variable declaration
// console.log(x)

// console.log(typeof "shayan")
// console.log(typeof 10)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)