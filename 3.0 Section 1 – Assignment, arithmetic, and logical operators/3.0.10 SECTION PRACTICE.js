//Exercise 1:
//Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):

console.log(2 * 3 + 1);      // expected 7
console.log(2 ** 4);       // expected 16
console.log(5 * 1);       // expected 5
console.log(8 ** 2 - 5 ** 2); // expected 39

//____________________________________________________________________________________________________//

//Exercise 2: 
/*Fill in the missing comparison operators in that such a way that all expressions result in true 
(replace the underscore symbol with the appropriate operator): */

console.log(4 * 5 == 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 != 4);

//____________________________________________________________________________________________________//

//Exercise 3: 
/*Fill in the missing comparison operators in that such a way that all expressions result in true 
(replace the underscore symbol with the appropriate operator): */

console.log(true || false);
console.log(false || !false);
console.log(false || false || true);
console.log(true || false && false && true);

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 != false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob

