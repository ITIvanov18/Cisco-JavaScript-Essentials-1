
//Objects//

//Question 1: 
/*Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:
    -starting station (key name from, give the name of the nearest station in your area as a value);
    -end station (key name to, give any other station within 100km as a value);
    -the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
The object must be created using curly brackets, in which all created fields will be listed immediately. 
Then display the values of all fields of the ticket on the console. */

let trainTicket = {
startingStation: "Sofia",
endStation: "Burgas",
price: 17.80 + " leva"
};

console.log(`From: ${trainTicket.startingStation}`);
console.log(`To: ${trainTicket.endStation}`);
console.log(`Price: ${trainTicket.price}`);

//____________________________________________________________________________________________________//

//Question 2: 
/*Declare an empty object and save it to a person variable. 
Using dot notation, add the name and surname fields to the object by entering your data as values. 
Try to display the individual fields on the console.*/

let person = {};
person.name = "Ivan";
person.surname = "Ivanov";

console.log(`${person.name} ${person.surname}`);

//____________________________________________________________________________________________________//

//Arrays//

//Question 3: We are setting up our small library of books about JavaScript programming. 
/* We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:
    -Speaking JavaScript, Axel Rauschmayer, 460;
    -Programming JavaScript Applications, Eric Elliott, 254;
    -Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Create an array of three objects representing the books. Each object must have the following properties: title, author, pages. */

let libraryOfBooks = [{ 
    title: "Speaking JavaScript", 
    author: "Axel Rauschmayer", 
    pages: 460 
    },
    { 
        title: "Programming JavaScript Applications", 
        author: "Eric Elliot", 
        pages: 254 
    }, 
    { 
    title: "Understanding ECMAScript 6", 
    author: "Nicholas C. Zakas", 
    pages: 352 
}];

//____________________________________________________________________________________________________//

//Question 4: 
/*Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. 
Use the appropriate method to do this, which will attach the book at the end of the array. 
Display the length of the array and, in turn, all the book names in the collection.*/

let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};

libraryOfBooks.push(newBook);
console.log(libraryOfBooks.length + " total books."); 

for (let i = 0; i < libraryOfBooks.length; i++) {
    let book = libraryOfBooks[i];
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Pages: " + book.pages);
    console.log("-----------------------------");
}

//____________________________________________________________________________________________________//
//Question 5: 
//Use the slice command to copy the last two books to the new array.

let selectedBooks = libraryOfBooks.slice(-2);
console.log(selectedBooks[0].title);
console.log(selectedBooks[1].title);






