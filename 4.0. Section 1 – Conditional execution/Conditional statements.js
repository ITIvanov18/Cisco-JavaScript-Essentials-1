let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
} else {
    alert("User not ready!");
}

//____________________________________________________________________________________________________//


let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
// console.log(total); // -> Uncaught ReferenceError: total is not defined

//____________________________________________________________________________________________________//


let number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}

//____________________________________________________________________________________________________//

const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

// calculate shipping cost //
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

// take account of insurance //
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

if (isOrderValid) {
console.log(shippingCost); // --> 12.98
} else {
console.log("Cannot order if under 21");
}


