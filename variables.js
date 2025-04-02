// The const keyword is used to declare a variable that cannot be reassigned
const pi = 3.14;
// pi = 3.14159; This will throw an error because pi is a constant

// The let keyword is used to declare a variable that can be reassigned
let radius = 5;
// radius = 10; This is allowed because radius is declared with let

// The var keyword is used to declare a variable that can be reassigned and has function scope
var area = pi * radius * radius;
// console.log(area); Output: 314.0

// console.table is used to display tabular data in a table format
console.table({ pi, radius, area });
