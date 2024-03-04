/*
console.log("Hello, World!");
console.log("Mary Stuart");
console.log("1542");
console.log(1542);
console.log("abc", "def", "ghi");
console.log("Mary Stuart (1542)"); console.log("Mary", "Stuart", "(1542)");
console.log("Mary"); console.log("Stuart"); console.log("(1542)");
console.log("Mary" + "Stuart" + "(1542)");
console.log("Mary " + "Stuart " + "(1542)");
*/

let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;
console.log(weight); // -> 70
//--------------------------------------------------------//
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    {
    console.log(counter); // -> 1
    }
}
counter = counter + 1;
console.log(counter); // -> 2
//--------------------------------------------------------//
let height2 = 180;
{
    let weight2 = 70;
    console.log(height2); // -> 180
    console.log(weight2); // -> 70
}
console.log(height); // -> 180
//console.log(weight2); // -> Uncaught ReferenceError: weight is not defined
//--------------------------------------------------------//
let  height3  =  200;
{
         let  weight3  =  100;
         {
                 let  info  =  "tall";
                 console.log(height3);  //  ->  200
                 console.log(weight3);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height3);  //  ->  200
         console.log(weight3);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }
//--------------------------------------------------------//
var globalGreeting = "Good ";
   
function testFunction() {
    var localGreeting = "Morning ";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}
   
testFunction();
   
console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
//--------------------------------------------------------//
let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
   
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
   
let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123
//--------------------------------------------------------//
let a1 = 1 / 0;
let b1 = -Infinity;
   
console.log(a1); // -> Infinity
console.log(b1); // -> -Infinity
console.log(typeof a1); // -> number
console.log(typeof b1); // -> number
   
let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number
//--------------------------------------------------------//
let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN
   
let test = "100" - "10";
console.log(test); // -> 90
let test2 = "100" + "10";
console.log(test2); // -> 10010
console.log(typeof test); // -> number
//--------------------------------------------------------//
let country = "Malawi";
let continent = "Africa";
   
let sentence = ` ${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.
//--------------------------------------------------------//
console.time();
console.log("test console"); // -> test console
console.timeEnd(); // -> default: 0.108154296875 ms
//--------------------------------------------------------//
let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k
//--------------------------------------------------------//
let str = "java script language";
   
console.log(str.length); // -> 20
console.log('test'.length); // -> 4
   
console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'
   
console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'
   
console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.')); // -> ['192', '168', '1', '1']
//--------------------------------------------------------//
let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined
   
someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object
//--------------------------------------------------------//


