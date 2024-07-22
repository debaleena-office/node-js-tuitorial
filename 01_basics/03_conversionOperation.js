let testConName = "";

let valueName = String(testConName);

//console.log(typeof valueName)

// 33 => string
// 33abc =>string
//abc = string


let testNumber = true;

let valueNumber = Number(testNumber);

//console.log(valueNumber)

//33 => number
//abc =>number
// abc33 => number
// true => number


let testBoolean = ""
let valueBoolean = Boolean(testBoolean) 

console.log( valueBoolean)

//1 => true datatype boolean
// 0 => false , datatype boolean
// "abc" =>true ,datatype boolean
// ""  => false




/************************************   Operations **********************************/

let value = 3
let negativeVal = -value

// console.log(negativeVal)    //output = -3

// console.log(2+2)   // 4
// console.log(2-2)   // 0
// console.log(2*2)   //4
// console.log(2**3)  //8
// console.log(2/3)   // 0.66666666666666
// console.log(2%3)   // 2



console.log("1" + 2)  // 12
console.log(1 + "2")   // 12
console.log("1"+2+2)   //122
console.log(1+2+"2")  // 32 when string is last firstly calculate first two
console.log(1+3+3+3+"9")  // 109


let gameCounter = 100;
gameCounter++;
console.log(gameCounter)   // 101


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); //x:4, y:3 ,first x value is 3 that is assign in y,so y is 3 and then x incremented by 1 so x value is 4


let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);    // a:4, b:4, first a is incremented by 1 and b value is 4 and a value is also 4






