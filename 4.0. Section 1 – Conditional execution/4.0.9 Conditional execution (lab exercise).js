/*Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list.
They will have a choice of:

 > showing the first contact (first)
 > showing the last contact (last)
 > adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data.
If at least one of the three values is missing (name, phone, or email) don't add the contact.*/

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

let action = prompt("What do you want to do? (first, last, add)");
if(action === "first") {
    alert(`First contact: ${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`);
} else if(action === "last") {
    alert(`Last contact: ${contacts[contacts.length - 1].name}, ${contacts[contacts.length - 1].phone}, ${contacts[contacts.length - 1].email}`);
} else if(action === "add") {
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
            let outputMessage = "";
            for (let i = 0; i < contacts.length; i++) {
                outputMessage += `${contacts[i].name}, ${contacts[i].phone}, ${contacts[i].email}\n`;
            }
            alert(`Contacts:\n${outputMessage}`);
        } else {
            alert("Error: Invalid input. Ensure the phone number has 10 digits and the email contains '@'.");
        }
    } else {
        alert("Error: All fields are required.");
    }
} else {
    alert("Invalid action. Please choose 'first', 'last', or 'add'.");
}

//____________________________________________________________________________________________________//