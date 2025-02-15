console.log('running...');

// Name
let para = document.getElementById("para")
// Calculation
let sum = document.getElementById("sum")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")

// Populating user name
let userName = prompt("Enter your name")
para.innerText = "Salam alikum, " + userName + "!"

// Taking numbers from user
let num1 = parseInt(prompt("Enter first number:"))
let num2 = parseInt(prompt("Enter second number:"))

// Populating user's calculation
sum.innerText = `${num1} + ${num2} = ${num1 + num2}`
sub.innerText = `${num1} - ${num2} = ${num1 - num2}`
mul.innerText = `${num1} * ${num2} = ${num1 * num2}`
div.innerText = `${num1} / ${num2} = ${num1 / num2}`