// Function
// A block of reusable code designed to perform a single task.

// Example: A calculator function that adds two numbers.
// function defenation
// function sum() {
//     let num1 = +prompt("Enter first number:")
//     let num2 = +prompt("Enter second number:")
//     let sum = num1 + num2
//     console.log(sum)
// }

// function calling/function call
// sum()
// sum()
// sum()
// sum()
// sum()

// Parameters and Arguments
// Parameters are placeholders in the function definition.
// function addTwo(num1, num2) {
//     let sum = num1 + num2
//     console.log(sum)
// }

// Arguments are actual values passed to the function.
// addTwo(5,3)
// addTwo(8,1)


function calc(num1, num2, operation) {
    if (operation == "+") {
        console.log(num1 + num2)
    } else if (operation == "-") {
        console.log(num1 - num2)
    } else if (operation == "*") {
        console.log(num1 * num2)
    } else if (operation == "/") {
        console.log(num1 / num2)
    } else {
        console.log("Invalid operation")
    }
}

calc(5, 5, "+")
calc(10, 5, "/")