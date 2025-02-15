console.log("running...")

let likes = 0

let like = document.getElementById("likes")
let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    likes++
    like.innerText = likes
})
