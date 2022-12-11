function convertToJASON(firstName, lastName, hairColor) {
    
    let newObject = {name: firstName, lastName: lastName, hairColor: hairColor}

    let newJson = JSON.stringify(newObject);

    console.log(newJson);
}
convertToJASON('George', 'Jones', 'Brown');
convertToJASON('Peter', 'Smith', 'Blond');