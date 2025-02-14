let isOver = false;
let counter = 1;
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
alert("The loop is over at " + `${counter-1}` + " iterations!");


//____________________________________________________________________________________________________//


let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190


//____________________________________________________________________________________________________//


let names = [];
let is_Over = false;
while (!is_Over) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
     names.push(name);
    } else {
     is_Over = true;
    }
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//____________________________________________________________________________________________________//

let moreValues = [20, 40, 70, 100];
let sum2 = 0;
for (let number of moreValues) {
    sum2 += number;
}
console.log(sum2); // -> 230


//____________________________________________________________________________________________________//

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
for (let city of cities) {
    if (city.population > 20e6) {
     console.log(`${city.name} (${city.population})`);
    }
}

//____________________________________________________________________________________________________//

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(key); // --> name, surname, age, email
    console.log(user[key]); // --> Calvin, Hart, 66, CalvinMHart@teleworm.us
};

//____________________________________________________________________________________________________//

for (let i = 0; i < 10; i++) {
    if (i == 3) {
     continue;
    }
    console.log(i);
} // -> 0, 1, 2, 4, 5, 6, 7, 8, 9

// The program writes numbers from 0 to 9 to the console, but skips the number 3.
// This happens because when i equals 3, the continue statement is executed, ending this iteration
// (and skipping the console.log statement) and starting another one.

//____________________________________________________________________________________________________//

let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a": {
     let message = "Gate A";
     console.log(message);
     break;
    }
    case "b": {
     let message = "Gate B";
     console.log(message);
     break;
    }
    case "c": {
     let message = "Gate C";
     console.log(message);
     break;
    }
    default:
     alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}





