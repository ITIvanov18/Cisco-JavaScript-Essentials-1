//Question 1:
//Write a code that will create variables and initialize them with values of Boolean, 
//Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

let boolean1 = true; 
let boolean2 = Boolean(true); 
let num1 = 100; 
let num2 = Number(200); 
let binInt1 = 100n; 
let bigInt2 = BigInt(200); 
let s1 = "Hello"; 
let s2 = String("Hello"); 
let u1 = undefined;

//____________________________________________________________________________________________________//

//Question 2: 
//Print all values and all types of those values using console.log. Try to use string interpolation to 
//display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`${b1} [${typeof boolean1}]`); 
console.log(`${b2} [${typeof boolean2}]`); 
console.log(`${n1} [${typeof num1}]`); 
console.log(`${n2} [${typeof num2}]`); 
console.log(`${bi1} [${typeof bigInt1}]`); 
console.log(`${bi2} [${typeof bigInt2}]`); 
console.log(`${s1} [${typeof s1}]`); 
console.log(`${s2} [${typeof s2}]`); 
console.log(`${u1} [${typeof u1}]`);

//____________________________________________________________________________________________________//

//Question 3: 
//Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. 
//Start with the value "1234". Is it possible?

let b = Boolean(BigInt(Number("1234"))); 
console.log(`${b} [${typeof b}]`);

//____________________________________________________________________________________________________//

//Question 4: 
//Try adding two values of the same type and check the result type. Try it for all primitive types.

let bool = true + false; 
let n = 100 + 200; 
let bigInt3 = 100n + 200n; 
let s = "He" + "llo"; 
let u = undefined + undefined; 
console.log(`${bool} [${typeof bool}]`);
console.log(`${n} [${typeof n}]`); 
console.log(`${bi} [${typeof bi}]`); 
console.log(`${s} [${typeof s}]`); 
console.log(`${u} [${typeof u}]`);



