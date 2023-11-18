function findSubstring(word, text) {
    let textArr = text.split(' ');
    let isNotFound = true;

    for (const w of textArr) {
        if (w.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }

    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}

findSubstring('javascript',
'JavaScript is the best programming language'
);

findSubstring('python',
'JavaScript is the best programming language'
);