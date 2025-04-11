let score = "33abc";

console.log(typeof score); // Output: string
console.log(typeof (score)); // Output: string


let valueinNum = Number(score)
console.log (typeof valueinNum); // Output number
console.log (valueinNum); // Output NaN

// "33" => 33
// "33abc" +. NaN
// true => 1; false => 0

let isloggedin = ""
let booleanisloggedin = Boolean(isloggedin)
console.log (booleanisloggedin);

// 1 conver to True
// 0 converts to False
// "" empty string convert to False
// "hey", "093" string convert to True

let num = 33
let strnum = String(num)
console.log (strnum);
console.log (typeof strnum);