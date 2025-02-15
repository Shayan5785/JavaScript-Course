console.log("running...")
let priceTag = document.getElementById("price")
let total = document.getElementById("total")

let price = priceTag.innerText.replace("PKR ", "")
let quantity = document.getElementById("quantity")
quantity.addEventListener('change', function () {
    let tatalPrice = quantity.value * price
    total.innerText = `PKR ${tatalPrice}`
})