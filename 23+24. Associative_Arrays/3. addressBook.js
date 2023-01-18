function createAddressBook (array) {
    let addressBook = {};

    for (const el of array) {
        let [name, address] = el.split(':');

        addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    for (const [name, address] of addressBookEntries) {
        console.log(`${name} -> ${address}`);
    }
}

createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);