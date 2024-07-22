// console.log(2 > 1)  // true
// console.log(1 > 3)  //false 

//those are the correct procedure


//console.log("2" >= 2)  //true ...result will be correct bt this is not the correct procedure


console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null >= 0)  // true


//the reason is that the equility check == and > < >= <= work differently 
//comparisn convert null into a number 0 thats why the result occure

console.log(undefined == 0)  //false ,in undefined all comparisns give output false

// === 
console.log("2" === 2) // false, === this is use for accurate result