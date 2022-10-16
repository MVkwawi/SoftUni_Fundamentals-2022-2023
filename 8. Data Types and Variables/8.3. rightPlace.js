function rightPlace(stringOne, char, stringTwo) {
    
    stringOne = stringOne.replace('_', char);

    if (stringOne === stringTwo) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String')

function tryTwo(stringOne, char, stringTwo) {
    let result = stringOne.replace('_', char);
    let output = result === stringTwo? 'Matched': 'Not Matched';
    console.log(output);
}
tryTwo('Str_ng', 'i', 'String')