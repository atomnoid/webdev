// JavaScript Data Types

// 1. Primitive Data Types
// These are immutable and stored by value.

// a. Number
// Represents both integer and floating-point numbers.
let age = 25; // Integer
let price = 19.99; // Floating-point
console.log(typeof age); // Output: "number"

// b. String
// Represents a sequence of characters.
let name = "John Doe";
console.log(typeof name); // Output: "string"

// c. Boolean
// Represents true or false values.
let isLoggedIn = true;
console.log(typeof isLoggedIn); // Output: "boolean"

// d. Undefined
// A variable that has been declared but not assigned a value.
let notAssigned;
console.log(typeof notAssigned); // Output: "undefined"

// e. Null
// Represents an intentional absence of any value.
let emptyValue = null;
console.log(typeof emptyValue); // Output: "object" (this is a known JavaScript quirk)

// f. Symbol (ES6)
// Represents a unique and immutable value.
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: "symbol"

// g. BigInt (ES11)
// Used for integers larger than the Number type can safely represent.
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: "bigint"

// 2. Non-Primitive Data Types
// These are mutable and stored by reference.

// a. Object
// Used to store collections of data or more complex entities.
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
};
console.log(typeof person); // Output: "object"

// b. Array
// A special type of object used to store ordered collections.
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // Output: "object"

// c. Function
// A callable object that executes a block of code.
function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // Output: "function"

// 3. Type Conversion
// JavaScript allows explicit and implicit type conversion.

// a. Implicit Conversion (Type Coercion)
let result = "5" + 5; // String concatenation
console.log(result); // Output: "55"

// b. Explicit Conversion
let num = Number("123"); // Converts string to number
console.log(num); // Output: 123

// 4. Checking Data Types
// Use `typeof` for primitive types and `instanceof` for objects.
console.log(typeof "hello"); // Output: "string"
console.log(fruits instanceof Array); // Output: true

// 5. Special Cases
// a. NaN (Not-a-Number)
let invalidNumber = Number("abc");
console.log(isNaN(invalidNumber)); // Output: true

// b. Infinity
let infiniteValue = 1 / 0;
console.log(infiniteValue); // Output: Infinity

// Summary:
// Primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-primitive types: Object (including Arrays and Functions)