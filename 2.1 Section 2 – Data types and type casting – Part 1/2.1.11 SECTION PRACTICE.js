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

console.log(`${boolean1} [${typeof boolean1}]`); 
console.log(`${boolean2} [${typeof boolean2}]`); 
console.log(`${num1} [${typeof num1}]`); 
console.log(`${num2} [${typeof num2}]`); 
console.log(`${bigInt1} [${typeof bigInt1}]`); 
console.log(`${bigInt2} [${typeof bigInt2}]`); 
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

//____________________________________________________________________________________________________//

//Question 5: 
//Try adding two values of different types and check the results.

let b1 = true + 100; 
//let b2 = true + 100n; // -> error! 
let b3 = true + "100"; 
//let n1 = 100 + 200n; // -> error! 
let n2 = 100 + true; 
let n3 = 100 + "200"; 
//let bi1 = 100n + 200; // -> error! 
//let bi2 = 100n + true; // -> error! 
let bi3 = 100n + "200"; 
let string1 = "100" + 200; 
let string2 = "100" + 200n; 
let string3 = "100" + true; 
let s4 = "abc" + 200; 
let s5 = "abc" + 200n; 
let s6 = "abc" + true; 
console.log(`${b1} [${typeof b1}]`); // -> 101 [number]
console.log(`${b2} [${typeof b2}]`); 
console.log(`${b3} [${typeof b3}]`); // -> true100 [string]
console.log(`${n1} [${typeof n1}]`); 
console.log(`${n2} [${typeof n2}]`); // -> 101 [number] 
console.log(`${n3} [${typeof n3}]`); // -> 100200 [string] 
console.log(`${bi3} [${typeof bi3}]`); // -> 100200 [string] 
console.log(`${string1} [${typeof string1}]`); // -> 100200 [string] 
console.log(`${string2} [${typeof string2}]`); // -> 100200 [string] 
console.log(`${string3} [${typeof string3}]`); // -> 100true [string]
console.log(`${s4} [${typeof s4}]`); // -> abc200 [string] 
console.log(`${s5} [${typeof s5}]`); // -> abc200 [string] 
console.log(`${s6} [${typeof s6}]`); // -> abctrue [string]

//____________________________________________________________________________________________________//

//Question 6: 
//Try to modify the line (const str1 = 42 + "1";) to get the result 43 (without removing the quotes around 1).

const str1 = 42 + +"1";



