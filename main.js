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
console.log(weight2); // -> Uncaught ReferenceError: weight is not defined
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

