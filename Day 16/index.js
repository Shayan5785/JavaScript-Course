// Number Guessing Game

let number = Math.ceil(Math.random() * 10)
let ans = false

for (let i = 0; i < 3; i++) {
    let guess = +prompt("Guess a number between 1 and 10:")

    if (number > guess) {
        console.log(`You guess a smaller number, ${guess}`)
    } else if (number < guess) {
        console.log(`You guess a bigger number, ${guess}`)
    } else {
        console.log(`You Won, ${guess}`)
        ans = true
        break
    }
}

if (ans == false) {
    console.log(`The correct answer was ${number}`)
}