// String to Number Conversion in JavaScript

// JavaScript provides several ways to convert a string to a number.
// Below are the most common methods with examples and explanations:

// 1. Using the Number() constructor
// This method converts a string to a number. If the string cannot be converted, it returns NaN (Not-a-Number).
let str1 = "42";
let num1 = Number(str1); // Converts "42" to 42
console.log(num1); // Output: 42

let invalidStr = "abc";
let invalidNum = Number(invalidStr); // Returns NaN because "abc" is not a valid number
console.log(invalidNum); // Output: NaN

// 2. Using parseInt()
// This method parses a string and returns an integer. It stops parsing at the first non-numeric character.
let str2 = "42px";
let num2 = parseInt(str2); // Extracts 42 from "42px"
console.log(num2); // Output: 42

let str3 = "abc42";
let num3 = parseInt(str3); // Returns NaN because the string does not start with a number
console.log(num3); // Output: NaN

// 3. Using parseFloat()
// Similar to parseInt(), but it parses floating-point numbers.
let str4 = "3.14";
let num4 = parseFloat(str4); // Converts "3.14" to 3.14
console.log(num4); // Output: 3.14

let str5 = "3.14abc";
let num5 = parseFloat(str5); // Extracts 3.14 from "3.14abc"
console.log(num5); // Output: 3.14

// 4. Using the unary plus (+) operator
// A shorthand way to convert a string to a number. It works like Number(), but is more concise.
let str6 = "123";
let num6 = +str6; // Converts "123" to 123
console.log(num6); // Output: 123

let str7 = "abc";
let num7 = +str7; // Returns NaN for invalid strings
console.log(num7); // Output: NaN

// 5. Using the bitwise NOT operator (~~)
// This method is a quick way to convert a string to an integer, but it truncates decimals.
let str8 = "45.67";
let num8 = ~~str8; // Converts "45.67" to 45 (truncates the decimal part)
console.log(num8); // Output: 45

// 6. Using parseInt() with a radix
// parseInt() can take a second argument, the radix, which specifies the base of the number system.
let str9 = "1010";
let num9 = parseInt(str9, 2); // Converts "1010" (binary) to 10 (decimal)
console.log(num9); // Output: 10

// Summary:
// - Use Number() or the unary plus (+) for general conversions.
// - Use parseInt() or parseFloat() for strings with mixed content (e.g., "42px").
// - Be cautious of NaN when the string is not a valid number.
// - Use parseInt() with a radix for non-decimal number systems.