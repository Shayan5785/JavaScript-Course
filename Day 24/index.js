let arr1 = [2, 4, 6]
let arr2 = arr1

console.log(arr1) // [2,4,6]
console.log(arr2) // [2,4,6]

console.log("After First Update")

arr1[0] = 8
console.log(arr1) // [8,4,6]
console.log(arr2) // [8,4,6]

console.log("After Second Update")
arr1[2] = 2
console.log(arr1) // [8,4,2]
console.log(arr2) // [8,4,2]

console.log("After Thrid Update")
arr2[1] = 5
console.log(arr1) // [8,5,2]
console.log(arr2) // [8,5,6]