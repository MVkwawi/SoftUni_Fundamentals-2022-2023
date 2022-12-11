function convertToObject(input) {
    let newObject = JSON.parse(input);

    for (const key in newObject) {
        console.log(`${key}: ${newObject[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');