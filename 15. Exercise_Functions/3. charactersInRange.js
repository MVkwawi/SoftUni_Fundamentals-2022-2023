function charactersInRange(charOne, charTwo) {
    let startingRange = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
    let endingRange = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());
    let charArray = [];

    for (let currentCharNum = startingRange + 1; currentCharNum < endingRange; currentCharNum ++) {
        let currentCharacter = String.fromCharCode(currentCharNum);
        charArray.push(currentCharacter);
    }
    console.log(charArray.join(' '));
}
charactersInRange('C', '#');