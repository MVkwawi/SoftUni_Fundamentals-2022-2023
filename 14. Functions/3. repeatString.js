function repeatStringEasy(string, count) {
    return string.repeat(count);
}
let newStringEasy = repeatStringEasy("abc", 3);
console.log(newStringEasy);

function repeatStringHard(string, count) {
    let newString = '';

    for (let i = 0; i < count; i ++) {
        newString += string;
    }

    return newString;
}
let newStringHard = repeatStringHard("String", 2);
console.log(newStringHard);