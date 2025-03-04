/* We can improve our contact list program a bit by using loops. You can now try to display not only
the first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do.
The user can choose to:

• display the first contact (first)
• display the last contact (last)
• display all contacts (all)
• add a new contact (new)
• exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again.
The program should end the actions only after the user gives a specified command, for example quit. */

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    

let action = prompt("What do you want to do? (first, last, all, add or quit)");
if(action === "first") {
    alert(`First contact: ${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`);
} else if(action === "last") {
    alert(`Last contact: ${contacts[contacts.length - 1].name}, ${contacts[contacts.length - 1].phone}, ${contacts[contacts.length - 1].email}`);
} else if (action === "all"){
    let outputMessage = "";
    for (let key in contacts) {
        outputMessage += `${contacts[key].name}, ${contacts[key].phone}, ${contacts[key].email}\n`;
    }
    alert(`Contacts:\n${outputMessage}`);
} else if(action === "new") {
    let contactName = prompt("Enter the name: ");
    let contactPhone = prompt("Enter the phone: ");
    let email = prompt("Enter the email: ");

    if(contactName && contactPhone && email) {
        if (typeof contactName === 'string' && contactPhone.length == 10 && email.includes("@")) {
            contacts.push({
            name: contactName,
            phone: contactPhone,
            email: email
            });
        } else {
            alert("Error: Invalid input. Ensure the phone number has 10 digits and the email contains '@'.");
        }
    } else {
        alert("Error: All fields are required.");
    }
} else if (action == "quit") {
    alert("Goodbye!");
    } else {
    alert("Invalid action. Please choose 'first', 'last', or 'add'.");
}