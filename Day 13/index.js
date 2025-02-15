// A for loop is a control flow statement that repeatedly executes a block of code for a fixed number of iterations.

// Syntax
// for (initialization; condition; increment) {
//     // Code to execute in each iteration --> action/body
// }

// Example 
// Example 
// for(let i = 2; i <= 3; i++){
//     console.log(i)  // 0    1   2
// }
// // i = 3

// infinite loop
// for(let i = 5; i > 3; i++){
//     console.log(i)  // 5    6   
// }
// i = 5

let num = +prompt("Enter the numver: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}


// Order of loop
// 1) initialization
// 2) Check condition (if condition true jump to line 3 else jumps to line 6)
// 3) Execute Code / Perform action
// 4) increment
// 5) Jumps to line 2
// 6) Terminate loop